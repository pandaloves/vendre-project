import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Importing components
import EmployeesTabs from "./pages/EmployeesTabs.vue";
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: "/", component: EmployeesTabs },
  { path: "/appnavbar", component: AppNavbar },
  { path: "/appfooter", component: AppFooter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(vuetify).mount("#app");
