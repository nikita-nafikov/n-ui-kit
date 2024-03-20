<template>
  <label class="checkbox-wrapper">
    <input type="checkbox" v-model="model" :value="value" class="checkbox" />
    <span v-bind="$attrs" class="custom-checkbox"></span>
    <span class="checkbox-label">{{ label }}</span>
  </label>
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

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | string | object | number): void;
}>();
</script>

<style scoped>
.checkbox {
}

.custom-checkbox {
}

.checkbox-label {
}

.checkbox-wrapper {
}

.real-checkbox {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.checkbox:focus + .custom-checkbox {
  box-shadow: 0px 0px 0px 1px #38577a, 0px 0px 10px #7e9bbd;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #7e9bbd;
  border-radius: 4px;
  vertical-align: sub;
  margin-right: 5px;
}

.custom-checkbox::before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url("../../assets/img/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  margin-top: 1px;
  transition: 0.2s ease-in;
}

.real-checkbox:checked + .custom-checkbox::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>
