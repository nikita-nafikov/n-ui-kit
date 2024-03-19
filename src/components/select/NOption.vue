<template>
  <li @click.stop="updateValue(value, label)" tabindex="0">
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

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
