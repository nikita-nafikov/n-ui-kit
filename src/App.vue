<script setup lang="ts">
import NInput from "./components/input/NInput.vue";
import NButton from "./components/button/NButton.vue";

import { provide } from "vue";
import useDarkTheme from "./composable/useDarkTheme";

const { isDarkTheme, toggleTheme } = useDarkTheme();

provide("isDarkTheme", { isDarkTheme, toggleTheme });

//dev
import { ref } from "vue";
import icon from "../public/icon.vue";

const str = ref("");

const x = () => {
  console.log("x");
};
</script>

<template>
  <div class="container">
    <NButton @click="toggleTheme">Сменить тему</NButton>
    <div class="x">
      <NButton @click="x" size="small" color="primary"> Кнопка </NButton>
      <NButton color="danger">Кнопка</NButton>
      <NButton color="warning"> Кнопка</NButton>
      <NButton size="large" color="success">Кнопка</NButton>
      <NButton color="warning">
        <template v-slot:left-icon><icon /></template> Кнопка
      </NButton>
    </div>
    <div @click="x">
      <NInput v-model="str" class="red"
        ><template v-slot:left-icon><icon /></template
      ></NInput>
      {{ str }}
    </div>
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

.red {
  color: red !important;
}
</style>
