<script setup lang="ts">
import NInput from "./components/input/NInput.vue";
import NButton from "./components/button/NButton.vue";
import NSelect from "./components/select/NSelect.vue";
import NOption from "./components/select/NOption.vue";
import NCheckbox from "./components/checkbox/NCheckbox.vue";

import { provide } from "vue";
import useDarkTheme from "./composable/useDarkTheme";

const { isDarkTheme, toggleTheme } = useDarkTheme();

provide("isDarkTheme", { isDarkTheme, toggleTheme });

//dev
import { ref } from "vue";
import icon from "../public/icon.vue";

// input
const str = ref("");

const input = () => {
  console.log("input");
};

//select
const selectValue = ref("");

const options = ref([
  {
    id: 1,
    value: "a",
  },
  {
    id: 2,
    value: "b",
  },
  {
    id: 3,
    value: "c",
  },
]);

// checkbox
const checkboxValue = ref(false);

const checkboxList = ref([
  {
    name: "William",
    age: 30,
    sex: "Male",
  },
  {
    name: "Thomas",
    age: 24,
    sex: "Male",
  },
  {
    name: "Jennifer",
    age: 20,
    sex: "Female",
  },
]);

const checkboxListValue = ref([]);

const change = (event) => {
  console.log("change", event[0].age);
};

//

const x = () => {
  console.log("x");
};
</script>

<template>
  <div class="container">
    <NButton @click="toggleTheme">Сменить тему</NButton>
    <div class="x">
      <NButton @click="x" size="small" color="primary"> Кнопка </NButton>
      <NButton disabled color="danger">Кнопка</NButton>
      <NButton color="warning"> Кнопка</NButton>
      <NButton size="large" color="success">Кнопка</NButton>
      <NButton color="warning">
        <template v-slot:left-icon><icon /></template> Кнопка
      </NButton>
    </div>
    <div @click="x">
      <NInput v-model="str" @input="input"
        ><template v-slot:left-icon><icon /></template
      ></NInput>
      {{ str }}
    </div>
    <div style="margin-top: 20px">
      <NInput round size="large" v-model="str"></NInput>
      {{ str }}
    </div>
    <div style="margin-top: 20px">
      <NInput class="size" place-holder="fsdf" round v-model="str"></NInput>
      {{ str }}
    </div>
    <div style="margin-top: 20px">
      <NSelect @change="change" v-model="selectValue">
        <NOption
          v-for="option of options"
          :key="option.id"
          :value="option.id"
          :label="option.value"
        />
      </NSelect>
      {{ selectValue }}
    </div>
    <div style="margin-top: 20px">
      <NCheckbox
        @change="change($event)"
        v-model="checkboxValue"
        label="лейбл"
      />
      {{ checkboxValue }}
    </div>

    <div style="margin-top: 20px">
      <template v-for="checkbox of checkboxList">
        <NCheckbox
          @change="change($event)"
          v-model="checkboxListValue"
          :label="checkbox.name"
          :value="checkbox"
          class="width"
        />
      </template>

      {{ checkboxListValue }}
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

.size {
  max-width: 50%;
}
</style>
