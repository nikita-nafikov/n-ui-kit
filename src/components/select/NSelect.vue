<template>
  <div
    class="select"
    @click="handleToggleSelect"
    v-click-outside="handleCloseSelect"
  >
    <div class="selected-label">selectedOption.label</div>
    <transition name="fade">
      <ul v-show="isSelectOpen" class="options-list">
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, inject, computed } from "vue";
import "../../style.css";

const { modelValue } = defineProps({
  modelValue: {
    type: String,
    reqired: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const isSelectOpen = ref(false);

const handleToggleSelect = () => {
  isSelectOpen.value = !isSelectOpen.value;
  console.log("toggle");
};

const handleCloseSelect = () => {
  isSelectOpen.value = false;
  console.log("close");
};
</script>

<style scoped>
.select {
  position: relative;
  cursor: pointer;
}

.selected-label {
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
