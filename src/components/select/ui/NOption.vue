<script setup lang="ts">
import { computed, inject } from 'vue';
import type { Ref } from 'vue';

const { label, value } = defineProps({
  /** label of Option */
  label: {
    type: [String, Number],
    required: true,
  },
  /** value of Option */
  value: {
    type: [String, Number, Object, Array<unknown>],
    required: true,
  },
});
const updateSelectValue = inject('updateSelectValue') as Function;
const selectedValue = inject('selectedValue') as Ref<string | number | unknown[] | object>;
const isMultiply = inject('isMultiply') as boolean;

const isChecked = computed(() => {
  if (isMultiply && Array.isArray(selectedValue.value)) {
    return selectedValue.value.find(
      (element: object) => JSON.stringify(element) === JSON.stringify(value),
    );
  }
  else {
    return JSON.stringify(selectedValue.value) === JSON.stringify(value);
  }
});
</script>

<template>
  <li
    class="option"
    :class="{ checked: isChecked }"
    tabindex="0"
    @click.stop="updateSelectValue(value, label)"
  >
    <slot>{{ label }}</slot>
  </li>
</template>

<style scoped>
.option {
  padding: 8px;
}

.option:hover {
  background: var(--gray-color);
}

.option.checked {
  color: var(--primary-color);
}
</style>
