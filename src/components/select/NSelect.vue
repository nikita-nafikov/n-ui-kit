<template>
  <div
    class="select"
    @click="handleToggleSelect"
    @keyup.enter="handleToggleSelect"
    v-click-outside="handleCloseSelect"
    tabindex="0"
  >
    <div class="selected-placeholder">{{ selectedLabel || placeHolder }}</div>
    <transition name="fade">
      <ul v-show="isSelectOpen" class="options-list">
        <slot><span>Список пуст</span></slot>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, provide } from "vue";
import "../../style.css";

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
  handleCloseSelect();
};

provide("updateValue", updateValue);
</script>

<style scoped>
.select {
  position: relative;
  cursor: pointer;
}

.selected-placeholder {
  padding: 10px;
  border: 1px solid #ccc;
}

.options-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
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
