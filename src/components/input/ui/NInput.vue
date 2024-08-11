<script lang="ts" setup>
import type { ComputedRef, PropType } from "vue";
import { inject, ref } from "vue";
import { useI18n } from "vue-i18n";

const { disabled, round, placeHolder, size } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  placeHolder: {
    type: String,
    default: null,
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
});
const { t } = useI18n({ useScope: "global" });
const input = ref<null | HTMLInputElement>(null);
const isDarkTheme = inject<ComputedRef<boolean>>("isDarkTheme");
const modelValue = defineModel();

function handleFocusInput() {
  input.value?.focus();
}
</script>

<template>
  <div
    class="input-wrapper"
    :class="[size, { dark: isDarkTheme }, { round }, { disabled }]"
    @click="handleFocusInput"
  >
    <slot name="left-icon" />
    <input
      ref="input"
      v-model="modelValue"
      class="input"
      :class="[size, { dark: isDarkTheme }]"
      :disabled="disabled"
      :placeholder="placeHolder || t('placeHolders.input')"
    />
    <slot name="right-icon" />
  </div>
</template>

<style scoped>
.input-wrapper {
  padding: var(--m-padding);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--black-color);
  color: var(--white-color);
  border-radius: var(--default-border-radius);
}

.disabled.input-wrapper {
  cursor: not-allowed;
  opacity: 0.5;
}

.dark.input-wrapper {
  background-color: var(--white-color);
}

.input {
  font-size: var(--m-font-size);
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;
  color: var(--white-color);
}

.input:disabled {
  opacity: 0.5;
}

.input.small {
  font-size: var(--s-font-size);
}

.input-wrapper.small {
  padding: var(--s-padding);
}

.input.large {
  font-size: var(--l-font-size);
}

.input-wrapper.large {
  padding: var(--l-padding);
}

.input:disabled {
  cursor: not-allowed;
}

.input-wrapper:focus-within {
  box-shadow: 0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.dark.input {
  color: var(--black-color);
}

.small.round {
  border-radius: var(--s-border-radius);
}

.input-wrapper.round {
  border-radius: var(--m-border-radius);
}

.large.round {
  border-radius: var(--l-border-radius);
}
</style>
