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

<script setup lang="ts">
import { inject, computed } from "vue";

const updateSelectValue = inject("updateSelectValue") as Function;
const selectedValue = inject("selectedValue") as any;
const isMultiply = inject("isMultiply") as boolean;

const { label, value } = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: [String, Number, Object],
    required: true,
  },
});

const isChecked = computed(() => {
  if (!isMultiply) {
    return JSON.stringify(selectedValue.value) === JSON.stringify(value);
  } else {
    return selectedValue.value.find(
      (element: object) => JSON.stringify(element) === JSON.stringify(value)
    );
  }
});
</script>

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
