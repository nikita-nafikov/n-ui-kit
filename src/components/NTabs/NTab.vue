<template>
  <div class="tab__content-fallback" :class="{ dark: isDarkTheme }">
    <slot>Содержимое пусто</slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const { isDarkTheme } = inject<boolean>("isDarkTheme");
</script>

<style scoped>
.tab__content-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  padding: var(--m-padding);
}

.dark.tab__content-fallback {
  color: var(--black-color);
  background: var(--white-color);
}
</style>
