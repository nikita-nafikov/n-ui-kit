<template>
  <label
    class="checkbox-wrapper"
    :class="{ disabled: props.disabled, dark: isDarkTheme }"
  >
    <input type="checkbox" v-model="model" :value="value" class="checkbox" />
    <span v-bind="$attrs" class="custom-checkbox" :class="props.size"></span>
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, PropType, inject } from "vue";

const { isDarkTheme } = inject<boolean>("isDarkTheme");

const props = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true,
  },
  value: {
    type: [Boolean, String, Object, Number],
    default: false,
  },
  label: {
    type: String,
    default: "Отметьте",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | string | object | number): void;
  (e: "change", value: boolean | string | object | number): void;
}>();
</script>

<style scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--black-color);
}

.dark.checkbox-wrapper {
  color: var(--white-color);
}

.disabled.checkbox-wrapper {
  cursor: not-allowed;
}

.checkbox {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.checkbox:focus + .custom-checkbox {
  box-shadow: 0px 0px 0px 1px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: var(--m-checkbox-size);
  height: var(--m-checkbox-size);
  background: var(--white-color);
  border: var(--default-border-width) solid var(--primary-color-hover);
  border-radius: var(--default-border-radius);
}

.checkbox:checked + .custom-checkbox {
  background: var(--primary-color);
}

.small.custom-checkbox {
  width: var(--s-checkbox-size);
  height: var(--s-checkbox-size);
}

.large.custom-checkbox {
  width: var(--l-checkbox-size);
  height: var(--l-checkbox-size);
}

.custom-checkbox::before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url("../../assets/img/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s ease-in;
}

.small.custom-checkbox::before {
  width: 10px;
  height: 10px;
}

.large.custom-checkbox::before {
  width: 15px;
  height: 15px;
}

.checkbox:checked + .custom-checkbox::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>
