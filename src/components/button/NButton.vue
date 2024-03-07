<script lang="ts" setup>
import { PropType, inject } from "vue";
import "../../style.css";

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
// @ts-ignore: Unreachable code error
const { isDarkTheme } = inject<boolean>("isDarkTheme");
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
  color: var(--white-color);
  outline: none;
  border-radius: var(--default-border-radius);
  padding: 8px 16px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 3px;
  background: var(--white-color);
  border: 1px solid var(--black-color);
}

.dark.button {
  color: var(--black-color);
  background: var(--dark-gray-color);
}

.button:hover {
  cursor: pointer;
}

.button:disabled {
  cursor: not-allowed;
}

.round {
  border-radius: var(--m-border-radius);
}

.default {
  color: var(--black-color);
}

.default:hover {
  border-color: var(--primary-color);
}

.dark.default {
  border-color: (--white-color);
}

.dark.default:hover {
  border-color: var(--primary-color);
}

.primary {
  border: 1px solid var(--primary-color);
  background: var(--primary-color);
}

.primary:hover {
  background: var(--primary-color-hover);
}

.dark.primary {
  border: 1px solid var(--dark-primary-color);
  background: var(--dark-primary-color);
}

.dark.primary:hover {
  background: var(--dark-primary-color-hover);
}

.success {
  border: 1px solid var(--success-color);
  background: var(--success-color);
}

.success:hover {
  background: var(--success-color-hover);
}

.dark.success {
  border: 1px solid var(--dark-success-color);
  background: var(--dark-success-color);
}

.dark.success:hover {
  background: var(--dark-success-color-hover);
}

.warning {
  border: 1px solid var(--warning-color);
  background: var(--warning-color);
}

.warning:hover {
  background: var(--warning-color-hover);
}

.dark.warning {
  border: 1px solid var(--dark-warning-color);
  background: var(--dark-warning-color);
}

.dark.warning:hover {
  background: var(--dark-warning-color-hover);
}

.danger {
  border: 1px solid var(--danger-color);
  background: var(--danger-color);
}

.danger:hover {
  background: var(--danger-color-hover);
}

.dark.danger {
  border: 1px solid var(--dark-danger-color);
  background: var(--dark-danger-color);
}

.dark.danger:hover {
  background: var(--dark-danger-color-hover);
}

.small {
  padding: 6px 10px;
  font-size: var(--s-font-size);
}

.small.round {
  border-radius: var(--s-border-radius);
}

.large {
  padding: 12px 20px;
  font-size: var(--l-font-size);
}

.large.round {
  border-radius: var(--l-border-radius);
}
</style>
