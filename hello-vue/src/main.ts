import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import router from "./router";

createApp(App).use(VueQueryPlugin).use(router).mount("#app");
