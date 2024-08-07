<script lang="ts" setup>
import { PropType, inject, ComputedRef } from "vue";

const { disabled, size, color } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
  color: {
    type: String as PropType<
      "primary" | "success" | "warning" | "danger" | "default"
    >,
    default: "default",
  },
});

const isDarkTheme = inject<ComputedRef<boolean>>("isDarkTheme");
</script>

<template>
  <button
    class="button"
    :class="[size, color, { dark: isDarkTheme }, { round: round }]"
    :disabled="disabled"
  >
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<style scoped>
.button {
  font: inherit;
  font-size: var(--m-font-size);
  outline: none;
  border-radius: var(--default-border-radius);
  padding: var(--m-padding);
  transition:
    color 0.2s,
    border-color 0.2s,
    background 0.2s,
    transform 0.1s;
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--white-color);
  background: var(--black-color);
  border: var(--default-border-width) solid var(--black-color);
}

.button:disabled {
  opacity: 0.5;
}

.dark.button {
  background: var(--white-color);
  color: var(--black-color);
  border: var(--default-border-width) solid var(--white-color);
}

.button:hover {
  cursor: pointer;
}

.button:not([disabled]):active {
  transform: scale(1.05);
}

.button:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.button:disabled {
  cursor: not-allowed;
}

.round {
  border-radius: var(--m-border-radius);
}

.default:hover {
  border-color: var(--primary-color);
}

.dark.default {
  color: var(--black-color);
  border-color: (--white-color);
}

.dark.default:hover {
  border-color: var(--primary-color);
}

.primary {
  border: var(--default-border-width) solid var(--primary-color);
  background: var(--primary-color);
}

.primary:hover {
  background: var(--primary-color-hover);
}

.dark.primary {
  border: var(--default-border-width) solid var(--dark-primary-color);
  background: var(--dark-primary-color);
}

.dark.primary:hover {
  background: var(--dark-primary-color-hover);
}

.success {
  border: var(--default-border-width) solid var(--success-color);
  background: var(--success-color);
}

.success:hover {
  background: var(--success-color-hover);
}

.dark.success {
  border: var(--default-border-width) solid var(--dark-success-color);
  background: var(--dark-success-color);
}

.dark.success:hover {
  background: var(--dark-success-color-hover);
}

.button.success:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--dark-success-color-hover),
    0px 0px 10px var(--dark-success-color-hover);
}

.warning {
  border: var(--default-border-width) solid var(--warning-color);
  background: var(--warning-color);
}

.warning:hover {
  background: var(--warning-color-hover);
}

.dark.warning {
  border: var(--default-border-width) solid var(--dark-warning-color);
  background: var(--dark-warning-color);
}

.dark.warning:hover {
  background: var(--dark-warning-color-hover);
}

.button.warning:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--dark-warning-color-hover),
    0px 0px 10px var(--dark-warning-color-hover);
}

.danger {
  border: var(--default-border-width) solid var(--danger-color);
  background: var(--danger-color);
}

.danger:hover {
  background: var(--danger-color-hover);
}

.dark.danger {
  border: var(--default-border-width) solid var(--dark-danger-color);
  background: var(--dark-danger-color);
}

.dark.danger:hover {
  background: var(--dark-danger-color-hover);
}

.button.danger:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--dark-danger-color-hover),
    0px 0px 10px var(--dark-danger-color-hover);
}

.small {
  padding: var(--s-padding);
  font-size: var(--s-font-size);
}

.small.round {
  border-radius: var(--s-border-radius);
}

.large {
  padding: var(-l-padding);
  font-size: var(--l-font-size);
}

.large.round {
  border-radius: var(--l-border-radius);
}
</style>
