<script setup lang="ts">
import NInput from "./components/input/NInput.vue";
import NButton from "./components/button/NButton.vue";
import NSelect from "./components/select/NSelect.vue";
import NOption from "./components/select/NOption.vue";
import NCheckbox from "./components/checkbox/NCheckbox.vue";
import NRadio from "./components/radio/NRadio.vue";
import NCollapse from "./components/collapse/NCollapse.vue";
import NTab from "./components/tabs/NTab.vue";
import NTabs from "./components/tabs/NTabs.vue";
import NTooltip from "./components/tooltip/NTooltip.vue";

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
const selectValue = ref(1);

const options = ref([
  {
    id: 1,
    value:
      "optiooption1option1option1option1option1option1option1option1option1n1",
    flag: "🥴",
  },
  {
    id: 2,
    value: "option2",
    flag: "🥵",
  },
  {
    id: 3,
    value: "option3",
    flag: "👻",
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
  console.log("change", event);
};

// radio

const radioValue = ref(2);
//

const x = () => {
  console.log("x");
};
</script>

<template>
  <div class="container" :class="{ dark: isDarkTheme }">
    <NButton @click="toggleTheme">Сменить тему</NButton>
    <div class="x">
      <NButton @click="x" size="small" color="primary"> Кнопка </NButton>
      <NButton disabled color="danger">Кнопка</NButton>
      <NButton color="warning"> Кнопка</NButton>
      <NButton size="large" color="success">1</NButton>
      <NButton color="warning">
        <template v-slot:left-icon><icon /></template> Кнопка
      </NButton>
    </div>
    <div @click="x">
      <NInput v-model="str" @input="input" disabled
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
      <NCheckbox
        @change="change($event)"
        v-model="checkboxValue"
        size="large"
        label="d"
      />
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
    <div style="margin-top: 20px">
      <div>
        <NRadio
          v-model="radioValue"
          size="small"
          :value="1"
          label="выберите2"
          class="testtest"
        />
      </div>
      <div><NRadio v-model="radioValue" :value="1" label="выберите" /></div>
      <div>
        <NRadio v-model="radioValue" size="large" :value="1" label="выберите" />
      </div>
      {{ radioValue }}
    </div>
    <div style="margin-top: 20px">
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse title="Раскрыть32">
        <template #collapse-header>
          <div class="collapse-icon"><icon /> привет</div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
      <NCollapse
        title="Раскрытьoptiooption1option1option1option1option1option1option1opti22"
      >
        <div style="padding: 20px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dicta facilis vel assumenda esse tenetur perspiciatis harum architecto
          quae. Est consectetur doloremque assumenda unde excepturi laudantium
          magnam eaque optio. Eius.
        </div>
      </NCollapse>
    </div>
    <div
      style="margin-top: 20px; display: flex; flex-direction: column; gap: 20px"
    >
      <NSelect @change="change" v-model="selectValue">
        <NOption
          v-for="option of options"
          :key="option.id"
          :value="option.id"
          :label="option.value"
        >
          <div>
            <div>
              <img
                style="width: 50px; height: 50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU"
                alt=""
              />
            </div>
            {{ option.flag + " " + option.value }}
          </div></NOption
        >
      </NSelect>
      {{ selectValue }}
    </div>
    <div style="margin-top: 20px">
      <NTabs>
        <NTab>
          <template #title
            ><icon />
            <div>Custom title</div></template
          >
          ffsfds1
        </NTab>
        <NTab title="xfsfds">31</NTab>
      </NTabs>
    </div>
    <div style="margin-top: 20px">
      <NTooltip>
        <template #content
          >Top Left prompts infoTop Left prompts infoTop Left prompts infoTop
          Left prompts infoTopTop Left prompts infoTop Left prompts infoTop Left
          prompts infoTop Left prompts infoTopsd</template
        >
        <NButton color="warning"> Кнопка</NButton>
      </NTooltip>

      <div style="margin-top: 50px">
        <NTooltip position="bottom">
          <template #content
            >Top Left prompts infoTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTopTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTop Left prompts infoTopsd</template
          >
          <NButton color="warning"> Кнопка</NButton>
        </NTooltip>
      </div>
      <div style="margin-top: 50px">
        <NTooltip position="right" content="Right Right Right Right ">
          <template #content
            >Top Left prompts infoTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTopTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTop Left prompts infoTopsd</template
          >
          <NButton color="warning"> Кнопка</NButton>
        </NTooltip>
      </div>

      <div style="margin-top: 50px">
        <NTooltip position="left" content="Right Right Right Right ">
          <NButton color="warning"> Кнопка</NButton>
        </NTooltip>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1000px;
  padding: 200px;
  background: #ffffff;
}

.dark.container {
  background: #000;
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

.text-ovetflow {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  word-break: keep-all !important;
}
</style>
