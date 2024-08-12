<script setup lang="ts">
import type { ComputedRef, PropType } from 'vue';
import { inject } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  value: {
    type: [Boolean, String, Object, Number],
    default: false,
  },
  label: {
    type: String,
    default: 'Отметьте',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
});
const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
const modelValue = defineModel();
</script>

<template>
  <label
    class="checkbox-wrapper"
    :class="{ disabled: props.disabled, dark: isDarkTheme }"
  >
    <input
      v-model="modelValue"
      type="checkbox"
      :value="value"
      :disabled="props.disabled"
      class="checkbox"
    >
    <span v-bind="$attrs" class="custom-checkbox" :class="props.size" />
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--black-color);
}

.disabled.checkbox-wrapper {
  opacity: 0.5;
  cursor: not-allowed;
}

.dark.checkbox-wrapper {
  color: var(--white-color);
}

.checkbox {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.checkbox:focus-visible + .custom-checkbox {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  min-width: var(--m-checkbox-size);
  min-height: var(--m-checkbox-size);
  background: var(--white-color);
  border: var(--default-border-width) solid var(--primary-color-hover);
  border-radius: var(--default-border-radius);
}

.checkbox:checked + .custom-checkbox {
  background: var(--primary-color);
}

.small.custom-checkbox {
  min-width: var(--s-checkbox-size);
  min-height: var(--s-checkbox-size);
}

.large.custom-checkbox {
  min-width: var(--l-checkbox-size);
  min-height: var(--l-checkbox-size);
}

.custom-checkbox::before {
  content: '';
  display: inline-block;
  width: 11px;
  height: 11px;
  background-image: url('../../assets/img/check.svg');
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
