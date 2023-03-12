import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//icon
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

//テーマ
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#2e8b57",
    "primary-darken-1": "#3700B3",
    secondary: "#424242",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

//vuetify追加
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
app.use(vuetify, { iconfont: "mdi" });

app.mount("#app");
