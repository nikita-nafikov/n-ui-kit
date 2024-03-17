<template>
  <li @click.stop="handleUpdateValue" tabindex="0">{{ label }}</li>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { label, value } = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleUpdateValue = () => {
  emit('update:modelValue', value)
  console.log("handleUpdateValue", value);
};
</script>
