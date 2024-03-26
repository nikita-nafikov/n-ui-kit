<template>
  <div
    class="select"
    @click.stop="handleToggleSelect"
    @keyup.space.stop="handleToggleSelect"
    v-click-outside="handleCloseSelect"
    :tabindex="disabled ? -1 : 0"
    :class="{ dark: isDarkTheme, open: isSelectOpen, disabled: disabled }"
  >
    <div class="select-placeholder-wrapper">
      <span class="select-placeholder">{{ selectedLabel || placeHolder }}</span>
      <div class="select__arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="14"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
      </div>
    </div>
    <transition name="fade">
      <ul v-show="isSelectOpen" class="select__option options-list">
        <render-option />
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, inject, useSlots, h } from "vue";
import "../../style.css";

const { isDarkTheme } = inject<boolean>("isDarkTheme");

const { modelValue, placeHolder, disabled } = defineProps({
  modelValue: {
    type: [String, Number],
    reqired: true,
  },
  placeHolder: {
    type: String,
    default: "Выберите",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isSelectOpen = ref(false);
const selectedLabel = ref<null | string | number>(null);
const $slots = useSlots();

const handleCloseSelect = (): void => {
  isSelectOpen.value = false;
};

const updateValue = (value: string | number, label: string | number): void => {
  selectedLabel.value = label;
  emit("update:modelValue", value);
  emit("change", value);
  handleCloseSelect();
};

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "change", value: string | number): void;
}>();

const handleToggleSelect = (): void => {
  if (disabled) return;
  isSelectOpen.value = !isSelectOpen.value;
};

const renderOption = () => {
  const slotChildrenList = $slots.default()[0].children;
  if (!slotChildrenList?.length) {
    return h(
      "span",
      { class: "select__fallback-text" },
      { default: () => "Список пуст" }
    );
  }

  return slotChildrenList.map((vnode) => {
    return h(
      vnode,
      {
        onClick: () => {
          updateValue(vnode.props.value, vnode.props.label);
        },
      },
      { default: () => vnode.props.label }
    );
  });
};
</script>

<style scoped>
.select {
  position: relative;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--black-color);
  border-radius: var(--default-border-radius);
  background-color: var(--black-color);
  color: var(--white-color);
}

.select.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.select__arrow {
  transition: transform 0.2s ease-in;
}

.select.open .select__arrow {
  transform: rotate(180deg);
}

.select-placeholder-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--m-padding);
}

.select:focus-visible {
  box-shadow: 0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.select.dark {
  background: var(--white-color);
  color: var(--black-color);
}

.select__option {
  margin-top: 8px;
}

.select__fallback-text {
  padding: var(--m-padding);
  display: inline-block;
}

.options-list {
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--black-color);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}

.dark .options-list {
  background: var(--white-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
