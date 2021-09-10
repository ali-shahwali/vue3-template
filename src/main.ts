// register vue composition api globally
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import App from "./App.vue";

// state management
import { createPinia } from "pinia";

// windicss layers
import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "./styles/main.css";
import "virtual:windi-utilities.css";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(createPinia());
app.mount("#app");
