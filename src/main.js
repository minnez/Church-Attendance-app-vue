import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/flex.css";
import "@/assets/styles/spacing.css";

createApp(App).use(router).mount("#app");
