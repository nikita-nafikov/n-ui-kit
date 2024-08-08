<script setup lang="ts">
import { ref, h } from "vue";
import icon from "../public/icon.vue";
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
import NModalWindow from "./components/modal/NModalWindow.vue";
import NConfigProvider from "./components/config-provider/NConfigProvider.vue";
import NNotificationContainer from "./components/notification/NNotificationContainer.vue";
import useNotifications from "./composiables/useNotification";
import NLoader from "./components/loader/NLoader.vue";
// dev

// input
const str = ref("");

function input(e) {
  console.log("input", e.target.value);
}

// select
const selectValue = ref([]);

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
    size: "small",
  },
  {
    name: "Thomas",
    age: 24,
    sex: "Male",
    size: "medium",
  },
  {
    name: "Jennifer",
    age: 20,
    sex: "Female",
    size: "large",
  },
]);

const checkboxListValue = ref([
  {
    name: "Jennifer",
    age: 20,
    sex: "Female",
    size: "large",
  },
]);

function change(event) {
  console.log("change", event);
}

// radio

const radioValue = ref({
  name: "Jennifer",
  age: 20,
  sex: "Female",
  size: "large",
});
// modalWindow

const ismodalWindowOpen = ref(false);
function handleClick() {
  console.log("click");
  ismodalWindowOpen.value = true;
}

function x() {
  console.log("x");
}

const isDarkTheme1 = ref(false);

function toggleTheme() {
  isDarkTheme1.value = !isDarkTheme1.value;
  console.log("x", isDarkTheme1.value);
}

const showLoading = () => {
  isShow.value = !isShow.value;
  setTimeout(() => {
    isShow.value = false;
  }, 2000);
};

const isShow = ref(false);

const { createNotification } = useNotifications();

const local = ref("ru");
</script>

<template>
  <NConfigProvider :is-dark-theme="isDarkTheme1" :locale="local">
    <NButton @click="toggleTheme"> Сменить тему </NButton>
    <NButton @click="local = 'en'"> switch language </NButton>
    <NButton @click="local = 'ru'"> Сменить язык </NButton>
    <div>
      <NLoader :show="isShow" :size="52" fullscreen>
        loading
        <!-- <template #custom-spin>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU"
              alt=""
            />
          </div>
        </template> -->
      </NLoader>
    </div>
    <NButton
      @click="
        createNotification({
          autoClose: true,
          type: 'info',
          message: h('img', {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU',
          }),
        })
      "
      >h</NButton
    >
    <NButton @click="showLoading">123</NButton>
    <div
      style="margin-top: 20px; display: flex; flex-direction: column; gap: 20px"
    >
      <NSelect
        v-model="selectValue"
        multiply
        @update:model-value="change"
        class="psps"
      >
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
            {{ `${option.flag} ${option.value}` }}
          </div>
        </NOption>
      </NSelect>
      {{ selectValue }}
      <NNotificationContainer />
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
    <div class="container dark">
      <NButton @click="toggleTheme"> Сменить тему </NButton>
      <div class="x">
        <NButton size="small" color="primary" @click="x"> Кнопка </NButton>
        <NButton disabled color="danger"> Кнопка </NButton>
        <NButton color="warning"> Кнопка </NButton>
        <NButton size="large" color="success"> 1 </NButton>
        <NButton color="warning">
          <template #left-icon>
            <icon />
          </template>
          Кнопка
        </NButton>
      </div>
      <div @click="x">
        <NInput v-model="str" @input="input" disabled round>
          <template #left-icon>
            <icon />
          </template>
        </NInput>
        {{ str }}
      </div>
      <div style="margin-top: 20px">
        <NInput v-model="str" round size="large" />
        {{ str }}
      </div>
      <div style="margin-top: 20px">
        <NInput v-model="str" class="size" place-holder="fsdf" round />
        {{ str }}
      </div>
      <div style="margin-top: 20px">
        <NCheckbox
          v-model="checkboxValue"
          size="large"
          label="d"
          @change="change($event)"
        />
      </div>
      <div style="margin-top: 20px">
        <template v-for="checkbox of checkboxList">
          <NCheckbox
            v-model="checkboxListValue"
            :label="checkbox.name"
            :value="checkbox"
            @update:model-value="change"
          />
        </template>

        {{ checkboxListValue }}
      </div>
      <div style="margin-top: 20px">
        <div style="margin-top: 20px">
          <template v-for="checkbox of checkboxList">
            <NRadio
              v-model="radioValue"
              :label="checkbox.name"
              :value="checkbox"
              @update:model-value="change"
              @change="x"
            />
          </template>
        </div>
        {{ radioValue }}
      </div>

      <div style="margin-top: 20px">
        <NTabs>
          <NTab>
            <template #title>
              <icon />
              <div>Custom title</div>
            </template>
            ffsfds1
          </NTab>
          <NTab title="xfsfds">
            31
            <div>
              <img
                style="width: 50px; height: 50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsiEK5xTQBo6DpkNzyY0NF6LSLLDG81_ISZZwvtmOoTTnVjD7wrbD7b-r5GMDY3-843A&usqp=CAU"
                alt=""
              />
            </div>
          </NTab>
        </NTabs>
      </div>
      <div style="margin-top: 20px">
        <NTooltip>
          <template #content>
            Top Left prompts infoTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTopTop Left prompts infoTop Left prompts infoTop
            Left prompts infoTop Left prompts infoTopsd
          </template>
          <NButton color="warning"> Кнопка </NButton>
        </NTooltip>

        <div style="margin-top: 50px">
          <NTooltip position="bottom">
            <template #content>
              Top Left prompts infoTop Left prompts infoTop Left prompts infoTop
              Left prompts infoTopTop Left prompts infoTop Left prompts infoTop
              Left prompts infoTop Left prompts infoTopsd
            </template>
            <NButton color="warning"> Кнопка </NButton>
          </NTooltip>
        </div>
        <div style="margin-top: 50px">
          <NTooltip position="right" content="Right Right Right Right ">
            <template #content>
              Top Left prompts infoTop Left <br />
              prompts infoTop Left prompts infoTop Left prompts infoTopTop Left
              prompts<br />
              infoTop Left prompts infoTop Left prompts infoTop Left prompts<br />
              infoTopsd
            </template>
            <NButton color="warning"> Кнопка </NButton>
          </NTooltip>
        </div>

        <div style="margin-top: 50px">
          <NTooltip position="right">
            <template #content>
              <div>Открыть модалку</div>
            </template>
            <NButton color="warning" @click="handleClick"> Кнопка </NButton>
          </NTooltip>
        </div>
        <div style="margin-top: 50px">
          <NModalWindow v-model="ismodalWindowOpen">
            <div>
              <NCollapse title="Раскрыть32">
                <template #collapse-header>
                  <div class="collapse-icon"><icon /> привет</div>
                </template>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dicta facilis vel assumenda esse tenetur
                  perspiciatis harum architecto quae. Est consectetur doloremque
                  assumenda unde excepturi laudantium magnam eaque optio. Eius.
                </div>
              </NCollapse>
              <NCollapse title="Раскрыть32">
                <template #collapse-header>
                  <div class="collapse-icon"><icon /> привет</div>
                </template>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur dicta facilis vel assumenda esse tenetur
                  perspiciatis harum architecto quae. Est consectetur doloremque
                  assumenda unde excepturi laudantium magnam eaque optio. Eius.
                </div>
              </NCollapse>
            </div>
            <template #footer> footer </template>
          </NModalWindow>
        </div>
      </div>
    </div>
  </NConfigProvider>
</template>

<style>
.container {
  max-width: 1000px;
  padding: 200px;
  background: #ffffff;
}

.dark.container {
  background: gray;
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

.psps {
  max-width: 250px;
}

.text-ovetflow {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  word-break: keep-all !important;
}
</style>
