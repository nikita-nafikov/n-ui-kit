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
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
}

.option:hover {
  background: var(--dark-gray-color);
}
</style>
