import { createApp } from "vue";
import "./style.css";
import clickOutside from "./directives/clickOutside";
import App from "./App.vue";

const app = createApp(App);

app.directive('clickOutside', clickOutside)

app.mount("#app");
