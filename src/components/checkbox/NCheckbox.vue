<template>
  <div>
    <input
      type="checkbox"
      v-model="model"
      :value="value"
      @change.stop
      v-bind="$attrs"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true,
  },
  value: {
    type: [Boolean, String, Object, Number],
    default: false,
  },
  label: {
    type: String,
    default: "Отметьте",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | string | object | number): void;
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
