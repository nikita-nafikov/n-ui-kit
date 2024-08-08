import { createApp } from "vue";
import "./style.css";
import clickOutside from "./directives/clickOutside";
import App from "./App.vue";
import { createI18n } from 'vue-i18n'

import { LANGUAGES, DEFAULT_LOCALE } from "./i18n";

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'ru',
  messages: LANGUAGES
})

const app = createApp(App);

app.directive('clickOutside', clickOutside)

app.use(i18n)
app.mount("#app");
