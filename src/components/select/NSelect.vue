<template>
  <div
    class="select"
    @click.stop="handleToggleSelect"
    @keyup.space.stop="handleToggleSelect"
    v-click-outside="handleCloseSelect"
    tabindex="0"
    :class="{ dark: isDarkTheme }"
  >
    <div class="selected-placeholder">{{ selectedLabel || placeHolder }}</div>
    <transition name="fade">
      <ul v-show="isSelectOpen" class="options-list select__option">
        <slot><span>Список пуст</span></slot>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, provide, inject } from "vue";
import "../../style.css";

const { isDarkTheme } = inject<boolean>("isDarkTheme");

const { modelValue, placeHolder } = defineProps({
  modelValue: {
    type: [String, Number],
    reqired: true,
  },
  placeHolder: {
    type: String,
    default: "Выберите",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "change", value: string | number): void;
}>();

const isSelectOpen = ref(false);
const selectedLabel = ref<null | string | number>(null);

const handleToggleSelect = (): void => {
  isSelectOpen.value = !isSelectOpen.value;
};

const handleCloseSelect = (): void => {
  isSelectOpen.value = false;
};

const updateValue = (value: string | number, label: string | number): void => {
  selectedLabel.value = label;
  emit("update:modelValue", value);
  emit("change", value);
  handleCloseSelect();
};

provide("updateValue", updateValue);
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
  background-image: url(../../assets/img/arrow.svg);
}

.selected-placeholder {
  padding: 10px;
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
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
