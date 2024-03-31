<template>
  <div class="tooltip-wrapper">
    <slot />
    <div class="tooltip">
      <span class="tooltip__text">{{ content }}</span>
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, PropType } from "vue";

const { content, position } = defineProps({
  content: {
    type: String,
  },
  position: {
    type: String as PropType<"top" | "bottom" | "right" | "left">,
    default: "top",
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-wrapper:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.tooltip {
  position: absolute;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  width: 100%;
  /* min-width: max-content; */
  transition: opacity 0.4s ease;
  padding: var(--s-padding);
  background: var(--black-color);
  color: var(--white-color);
  border: 2px solid var(--primary-color);
}

.tooltip::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: var(--primary-color) transparent transparent transparent;
}
</style>
