<script setup lang="ts">
import type {
  ComputedRef,
  PropType,
  VNode,
} from 'vue';
import {
  computed,
  inject,
  onMounted,
  provide,
  ref,
  useSlots,
} from 'vue';
import { useI18n } from 'vue-i18n';
import Arrow from '../../../assets/icon/Arrow.vue';

const { placeHolder, disabled, size, multiply } = defineProps({
  /** Select placeholder */
  placeHolder: {
    type: String,
    default: null,
  },
  /** whether Select is disabled */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** whether multiple-select is activated */
  multiply: {
    type: Boolean,
    default: false,
  },
  /** size of Select */
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
});

const modelValue = defineModel<string | number | unknown[] | object>();

const { t } = useI18n({ useScope: 'global' });
const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
const isSelectOpen = ref<boolean>(false);
const selectedLabel = ref<null | string | number>(null);
const selectedLabels = ref<(string | number)[]>([]);
const select = ref<null | HTMLElement>(null);
const isSelectOpenUp = ref<boolean>(false);
const slots = useSlots();

const definePlaceHolderText = computed(() => {
  if (!multiply && selectedLabel.value) {
    return selectedLabel.value;
  }
  else if (multiply && selectedLabels.value.length) {
    return selectedLabels.value.join(', ');
  }
  else {
    return placeHolder || t('placeHolders.select');
  }
});

function handleToggleSelect(): void {
  if (disabled)
    return;
  isSelectOpen.value = !isSelectOpen.value;
  if (isSelectOpen.value && select.value) {
    const rect = select.value.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect?.bottom;
    isSelectOpenUp.value = distanceToBottom < 220;
  }
}

function handleCloseSelect(): void {
  isSelectOpen.value = false;
}

function updateValue(value: string | number | object, label: string | number): void {
  if (multiply && Array.isArray(modelValue.value)) {
    const selectedItemIndex = modelValue.value.findIndex(
      (element: object | string | number) =>
        JSON.stringify(element) === JSON.stringify(value),
    );

    if (selectedItemIndex === -1) {
      modelValue.value = [...modelValue.value, value];
      selectedLabels.value.push(label);
    }
    else {
      modelValue.value = modelValue.value.filter(
        (_: object | string | number, index: number) =>
          index !== selectedItemIndex,
      );
      selectedLabels.value = selectedLabels.value.filter(
        element => element !== label,
      );
    }
  }
  else {
    modelValue.value = value;
    selectedLabel.value = label;
    handleCloseSelect();
  }
}

onMounted(() => {
  if (!modelValue.value)
    return;

  (slots.default?.()[0].children as Array<VNode>)?.forEach((vnode) => {
    if (!vnode.props)
      return;

    if (multiply && Array.isArray(modelValue.value)) {
      modelValue.value.forEach((value) => {
        if (vnode.props && JSON.stringify(vnode.props.value) === JSON.stringify(value)) {
          selectedLabels.value.push(vnode.props.label);
        }
      });
    }
    else {
      if (
        JSON.stringify(vnode.props.value) === JSON.stringify(modelValue.value)
      )
        return (selectedLabel.value = vnode.props.label);
    }
  });
});

provide('updateSelectValue', updateValue);
provide('selectedValue', modelValue);
provide('isMultiply', multiply);
</script>

<template>
  <div
    ref="select"
    v-click-outside="handleCloseSelect"
    class="select"
    :tabindex="disabled ? -1 : 0"
    :class="{ dark: isDarkTheme, open: isSelectOpen, disabled }"
    @click="handleToggleSelect"
    @keyup.enter.stop="handleToggleSelect"
  >
    <div class="select-placeholder-wrapper" :class="size">
      <span class="select-placeholder">{{ definePlaceHolderText }}</span>
      <div class="select__arrow">
        <Arrow />
      </div>
    </div>
    <transition name="fade">
      <ul
        v-show="isSelectOpen"
        class="select__option"
        :class="[
          isSelectOpenUp
            ? 'select__option_open-down'
            : 'select__option_open-up',
        ]"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--black-color);
  border-radius: var(--default-border-radius);
  background-color: var(--black-color);
  color: var(--white-color);
}

.select.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.select__arrow {
  transition: transform 0.2s ease-in;
}

.select.open .select__arrow {
  transform: rotate(180deg);
}

.select-placeholder-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--m-padding);
  gap: 8px;
}

.small.select-placeholder-wrapper {
  padding: var(--s-padding);
}

.large.select-placeholder-wrapper {
  padding: var(--l-padding);
}

.select:focus-visible {
  box-shadow:
    0px 0px 0px 2px var(--primary-color-hover),
    0px 0px 10px var(--primary-color-hover);
}

.select.dark {
  background: var(--white-color);
  color: var(--black-color);
}

.select__fallback-text {
  padding: var(--m-padding);
  display: inline-block;
}

.select__option {
  margin-top: 8px;
  position: absolute;
  left: 0;
  width: 100%;
  background: var(--black-color);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  padding-top: 8px;
  padding-bottom: 8px;
}

.select__option_open-down {
  bottom: 120%;
  top: auto;
}

.select__option_open-top {
  bottom: auto;
  top: 100%;
}

.dark .select__option {
  background: var(--white-color);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
