import "@/assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router/movies.router";

createApp(App).use(router).use(createPinia()).mount("#app");
