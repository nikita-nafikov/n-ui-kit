<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, computed } from "vue";

const props = defineProps({
  isDarkTheme: {
    type: Boolean,
    default: false,
  },
});

provide(
  "isDarkTheme",
  computed(() => props.isDarkTheme)
);
</script>
