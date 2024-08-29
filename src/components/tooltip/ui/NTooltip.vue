<script setup lang="ts">
import type { ComputedRef, PropType } from 'vue';
import { inject } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const { content, position } = defineProps({
  /** display content, can be overridden by slot#content */
  content: {
    type: String,
  },
  /** position of Tooltip */
  position: {
    type: String as PropType<'top' | 'bottom' | 'right' | 'left'>,
    default: 'top',
  },
});

const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
</script>

<template>
  <div class="tooltip-wrapper">
    <slot />
    <div
      class="tooltip"
      :class="[{ dark: isDarkTheme }, `tooltip_${position}`]"
      v-bind="$attrs"
    >
      <slot name="content">
        <span class="tooltip__text">{{ content }}</span>
      </slot>
    </div>
  </div>
</template>

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
  top: -110%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  width: 100%;
  min-width: max-content;
  transition: opacity 0.5s ease;
  padding: var(--s-padding);
  background: var(--black-color);
  color: var(--white-color);
  border: 2px solid var(--primary-color);
  border-radius: var(--default-border-radius);
  z-index: var(--tooltip-z-index);
}

.dark.tooltip {
  background: var(--white-color);
  color: var(--black-color);
}

.tooltip_bottom {
  top: auto;
  bottom: -110%;
}

.tooltip_right {
  top: 0%;
  left: 110%;
  transform: translateX(0);
}

.tooltip_left {
  top: 0%;
  left: auto;
  right: 110%;
  transform: translateX(0);
}

.tooltip::after {
  content: ' ';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 8px;
  border-style: solid;
  border-color: var(--primary-color) transparent transparent transparent;
}

.tooltip_bottom::after {
  top: auto;
  bottom: 100%;
  border-color: transparent transparent var(--primary-color) transparent;
}

.tooltip_right::after {
  top: 0%;
  left: 0%;
  transform: translate(-103%, 50%);
  border-color: transparent var(--primary-color) transparent transparent;
}

.tooltip_left::after {
  top: 0%;
  left: auto;
  right: 0%;
  transform: translate(103%, 50%);
  border-color: transparent transparent transparent var(--primary-color);
}
</style>
