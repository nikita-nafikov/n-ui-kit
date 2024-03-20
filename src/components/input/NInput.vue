<template>
  <div
    class="input-wrapper"
    :class="[size, { dark: isDarkTheme }, { round: round }]"
    @click="handleFocusInput"
  >
    <slot name="left-icon" />
    <input
      ref="input"
      class="input"
      :class="[size, { dark: isDarkTheme }]"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeHolder"
      @input.stop="handleUpdateValue"
      v-bind="$attrs"
    />
    <slot name="right-icon" />
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, inject } from "vue";
import "../../style.css";

const input = ref<null | HTMLInputElement>(null);
// @ts-ignore: Unreachable code error
const { isDarkTheme } = inject<boolean>("isDarkTheme");

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { modelValue } = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
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
    default: "Введите",
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
});

const handleUpdateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const handleFocusInput = () => {
  input.value?.focus();
};
</script>

<style scoped>
.input-wrapper {
  padding: var(--m-padding);
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: var(--black-color);
  border-radius: var(--default-border-radius);
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
