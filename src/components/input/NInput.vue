<template>
  <div class="input-wrapper" :class="{ dark: isDarkTheme }" @click="focusInput">
    <slot name="left-icon" class="x" />
    <input
      ref="input"
      class="input"
      :class="{ dark: isDarkTheme }"
      :value="modelValue"
      @input="updateValue"
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

const emit = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const focusInput = () => {
  input.value?.focus();
};
</script>

<style scoped>
.input-wrapper {
  padding: var(--s-padding);
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

.dark.input {
  color: var(--black-color);
}

.x {
  display: none;
}
</style>
