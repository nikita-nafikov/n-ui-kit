<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { inject } from 'vue';

const isDarkTheme = inject<ComputedRef<boolean>>('isDarkTheme');
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    :fill="isDarkTheme ? '#f2c97d' : '#f0a020'"
  >
    <path
      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM11,7a1,1,0,0,1,2,0v6a1,1,0,0,1-2,0Zm1,12a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Z"
    />
  </svg>
</template>
