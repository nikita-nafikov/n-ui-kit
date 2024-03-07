<script setup lang="ts">
import { provide } from "vue";
import NButton from "./components/button/NButton.vue";
import useDarkTheme from "./composable/useDarkTheme";

const { isDarkTheme, toggleTheme } = useDarkTheme();

provide("isDarkTheme", { isDarkTheme, toggleTheme });

import icon from "../public/icon.vue";
</script>

<template>
  <div class="container">
    <NButton @click="toggleTheme">Сменить тему</NButton>
    <div class="x">
      <NButton size="small" color="primary"> Кнопка </NButton>
      <NButton color="danger">Кнопка</NButton>
      <NButton color="warning"> Кнопка</NButton>
      <NButton size="large" color="success">Кнопка</NButton>
    </div>
    <NButton color="warning">
      <template v-slot:left-icon><icon /></template> Кнопка
    </NButton>
  </div>
</template>

<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 200px;
}

.x {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
