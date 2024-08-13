<script setup lang="ts">
import type { ComputedRef, PropType } from 'vue';
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  value: {
    type: [Boolean, String, Number, Object],
    default: false,
  },
  label: {
    type: String,
    default: null,
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
const { t } = useI18n({ useScope: 'global' });
const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
const modelValue = defineModel();
</script>

<template>
  <label
    class="radio-wrapper"
    :class="{ disabled: props.disabled, dark: isDarkTheme }"
  >
    <input
      v-model="modelValue"
      type="radio"
      :value="value"
      :disabled="props.disabled"
      class="radio"
    >
    <span v-bind="$attrs" class="custom-radio" :class="props.size" />
    <span class="radio-label">{{ label || t('labels.radio') }}</span>
  </label>
</template>

<style scoped>
.radio-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: var(--black-color);
}

.disabled.radio-wrapper {
  opacity: 0.5;
  cursor: not-allowed;
}

.dark.radio-wrapper {
  color: var(--white-color);
}

.radio {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.radio:focus-visible + .custom-radio {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.custom-radio {
  position: relative;
  display: inline-block;
  min-width: var(--m-radio-size);
  min-height: var(--m-radio-size);
  background: var(--white-color);
  border: 1px solid var(--primary-color-hover);
  border-radius: var(--circle-border-radius);
}

.radio:checked + .custom-radio {
  background: var(--primary-color);
}

.small.custom-radio {
  min-width: var(--s-radio-size);
  min-height: var(--s-radio-size);
}

.large.custom-radio {
  min-width: var(--l-radio-size);
  min-height: var(--l-radio-size);
}

.custom-radio::before {
  content: '';
  display: inline-block;
  min-width: 5px;
  min-height: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s ease-in;
  border-radius: var(--circle-border-radius);
  background: var(--white-color);
}

.small.custom-radio::before {
  min-width: 4px;
  min-height: 4px;
}

.large.custom-radio::before {
  min-width: 6px;
  min-height: 6px;
}

.radio:checked + .custom-radio::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>
