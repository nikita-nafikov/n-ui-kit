<template>
  <input type="checkbox" v-model="model" :value="value" />
  <span>{{ label }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true,
  },
  value: {
    type: [Boolean, String, Object],
    required: true,
  },
  label: {
    type: String,
    default: "Отметьте",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | string | object): void;
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
