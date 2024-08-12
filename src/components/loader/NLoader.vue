<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps({
  fullscreen: {
    type: Boolean,
    required: false,
    default: false,
  },
  show: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: Number,
    required: false,
    default: 32,
  },
});

const INIT_BODY_OVERFLOW = document.body.style.overflow;

watch(
  () => props.show,
  (newVal) => {
    if (newVal && props.fullscreen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = INIT_BODY_OVERFLOW;
    }
  },
);
</script>

<template>
  <div v-if="props.show" :class="{ 'loader-overlay': props.fullscreen }">
    <div class="loader">
      <div class="loader-spin-wrapper">
        <slot name="custom-spin">
          <div
            class="loader-spin"
            :style="`--spin-width-size: ${props.size}px; --spin-height-size: ${props.size}px`"
          />
        </slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.loader-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-bg);
  z-index: var(--loder-z-index);
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.loader-spin {
  border: calc(var(--spin-width-size) / 8) solid var(--gray-color);
  border-top: calc(var(--spin-width-size) / 8) solid var(--primary-color);
  border-radius: 50%;
  width: var(--spin-width-size);
  height: var(--spin-height-size);
}

.loader-spin-wrapper {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
