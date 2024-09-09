<script setup lang="ts">
import { h, ref } from 'vue';
import icon from '../public/icon.vue';
import NInput from './components/input/ui/NInput.vue';
import NButton from './components/button/ui/NButton.vue';
import NSelect from './components/select/ui/NSelect.vue';
import NOption from './components/select/ui/NOption.vue';
import NCheckbox from './components/checkbox/ui/NCheckbox.vue';
import NRadio from './components/radio/ui/NRadio.vue';
import NCollapse from './components/collapse/ui/NCollapse.vue';
import NConfigProvider from './components/config-provider/ui/NConfigProvider.vue';
import NNotificationContainer from './components/notification/ui/NNotificationContainer.vue';
import { useNotifications } from './composiables/useNotification';
import NLoader from './components/loader/ui/NLoader.vue';
import NTabs from './components/tabs/ui/NTabs.vue';
import NTab from './components/tabs/ui/NTab.vue';
// dev

// input
const str = ref('');

function input(e) {
  console.log('input', e.target.value);
}

// select
const selectValue = ref([2]);

const options = ref([
  {
    id: 1,
    value:
      'optiooption1option1option1option1option1option1option1option1option1n1',
    flag: '🥴',
  },
  {
    id: 2,
    value: 'option2',
    flag: '🥵',
  },
  {
    id: 3,
    value: 'option3',
    flag: '👻',
  },
]);

// checkbox
const checkboxValue = ref(false);

const checkboxList = ref([
  {
    name: 'William',
    age: 30,
    sex: 'Male',
    size: 'small',
  },
  {
    name: 'Thomas',
    age: 24,
    sex: 'Male',
    size: 'medium',
  },
  {
    name: 'Jennifer',
    age: 20,
    sex: 'Female',
    size: 'large',
  },
]);

const checkboxListValue = ref([
  {
    name: 'Jennifer',
    age: 20,
    sex: 'Female',
    size: 'large',
  },
]);

function change(event) {
  console.log('change', event);
}

// radio

const radioValue = ref({
  name: 'Jennifer',
  age: 20,
  sex: 'Female',
  size: 'large',
});
// modalWindow

const ismodalWindowOpen = ref(false);
function handleClick() {
  console.log('click');
  ismodalWindowOpen.value = true;
}

function x() {
  console.log('x');
}

const isDarkTheme1 = ref(false);

function toggleTheme() {
  isDarkTheme1.value = !isDarkTheme1.value;
  console.log('x', isDarkTheme1.value);
}

function showLoading() {
  isShow.value = !isShow.value;
  setTimeout(() => {
    isShow.value = false;
  }, 2000);
}

const isShow = ref(false);

const { createNotification } = useNotifications();

const local = ref('ru');
</script>

<template>
  <NConfigProvider :is-dark-theme="isDarkTheme1" :locale="local">
    <NTabs>
      <NTab title="1">
        1
      </NTab>
      <NTab title="2">
        2
      </NTab>
    </NTabs>
    <NButton @click="toggleTheme">
      Сменить тему
    </NButton>
    <NButton @click="local = 'en'">
      switch language
    </NButton>
    <NButton @click="local = 'ru'">
      Сменить язык
    </NButton>
    <div>
      <NLoader :show="isShow" :size="52" fullscreen>
        loading
      </NLoader>
    </div>
    <NButton
      @click="
        createNotification({
          type: 'info',
        })
      "
    >
      hfssdffsd
    </NButton>

    <NNotificationContainer />
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
