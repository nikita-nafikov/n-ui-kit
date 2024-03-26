<template>
  <li class="option" tabindex="0">
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
const { label } = defineProps({
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
}

.option:hover {
  background: var(--dark-gray-color);
}
</style>
