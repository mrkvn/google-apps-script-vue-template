import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./routes/Home.vue";
import About from "./routes/About.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
