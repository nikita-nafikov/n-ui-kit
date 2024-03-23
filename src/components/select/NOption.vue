<template>
  <li
    class="option"
    @click.stop="updateValue(value, label)"
    @keyup.enter.stop="updateValue(value, label)"
    tabindex="0"
  >
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { inject } from "vue";

const updateValue = inject<Function>("updateValue");

const { label, value } = defineProps({
  label: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style scoped>
.option {
  padding: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.option:hover {
  background: var(--dark-gray-color);
}
</style>
