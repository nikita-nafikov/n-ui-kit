<template>
  <div
    ref="select"
    class="select"
    @click="handleToggleSelect"
    @keyup.enter.stop="handleToggleSelect"
    v-click-outside="handleCloseSelect"
    :tabindex="disabled ? -1 : 0"
    :class="{ dark: isDarkTheme, open: isSelectOpen, disabled: disabled }"
  >
    <div class="select-placeholder-wrapper" :class="size">
      <span v-if="!multiply" class="select-placeholder">{{
        selectedLabel || placeHolder
      }}</span>
      <span v-else class="select-placeholder">{{
        selectedLabel || placeHolder
      }}</span>
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
      <ul
        v-show="isSelectOpen"
        class="select__option"
        :class="[
          isSelectOpenUp
            ? 'select__option_open-down'
            : 'select__option_open-up',
        ]"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, provide, inject } from "vue";

const modelValue = defineModel<any>();

const { placeHolder, disabled, size, multiply } = defineProps({
  placeHolder: {
    type: String,
    default: "Выберите",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiply: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
});

const isDarkTheme = inject<boolean>("isDarkTheme");
const isSelectOpen = ref<boolean>(false);
const selectedLabel = ref<null | string | number>(null);
const select = ref<null | HTMLElement>(null);
const isSelectOpenUp = ref<boolean>(false);

const handleToggleSelect = (): void => {
  if (disabled) return;
  isSelectOpen.value = !isSelectOpen.value;
  if (isSelectOpen.value && select.value) {
    const rect = select.value.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect?.bottom;
    isSelectOpenUp.value = distanceToBottom < 220 ? true : false;
  }
};

const handleCloseSelect = (): void => {
  isSelectOpen.value = false;
};

const updateValue = (
  value: string | number | object,
  label: string | number
): void => {
  if (multiply && typeof value !== "object") {
    const selectedItemIndex = modelValue.value.findIndex(
      (element: string | number) => element === value
    );

    if (selectedItemIndex === -1) {
      modelValue.value = [...modelValue.value, value];
    } else {
      modelValue.value = modelValue.value.filter(
        (element: string | number) => element !== value
      );
    }
  } else if (multiply && typeof value === "object") {
    const selectedItemIndex = modelValue.value.findIndex(
      (element: object) => JSON.stringify(element) === JSON.stringify(value)
    );

    if (selectedItemIndex === -1) {
      modelValue.value = [...modelValue.value, value];
    } else {
      modelValue.value = modelValue.value.filter(
        (element: object, index: number) => index !== selectedItemIndex
      );
    }
  } else {
    modelValue.value = value;
    handleCloseSelect();
  }
};

provide("updateSelectValue", updateValue);
provide("selectedValue", modelValue);
provide("isMultiply", multiply);
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

.small.select-placeholder-wrapper {
  padding: var(--s-padding);
}

.large.select-placeholder-wrapper {
  padding: var(--l-padding);
}

.select:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.select.dark {
  background: var(--white-color);
  color: var(--black-color);
}

.select__fallback-text {
  padding: var(--m-padding);
  display: inline-block;
}

.select__option {
  margin-top: 8px;
  position: absolute;
  left: 0;
  width: 100%;
  background: var(--black-color);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  padding-top: 8px;
  padding-bottom: 8px;
}

.select__option_open-down {
  bottom: 120%;
  top: auto;
}

.select__option_open-top {
  bottom: auto;
  top: 100%;
}

.dark .select__option {
  background: var(--white-color);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
