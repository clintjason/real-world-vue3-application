import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Create a reactive object
const GStore = reactive({ flashMessage: '' })

createApp(App).use(store).use(router)
.provide('GStore', GStore)  // provide this object so others can inject it
.mount("#app");
