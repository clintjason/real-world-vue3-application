import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import 'nprogress/nprogress.css';

// Create a reactive object
//const GStore = reactive({ flashMessage: '' })

createApp(App)
    .use(router)
    .provide('GStore', GStore)  // provide this object so others can inject it
    .mount("#app");
