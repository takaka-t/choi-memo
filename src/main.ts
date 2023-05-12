//pinia
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

//vue
import { createApp } from "vue";
import App from "./App.vue";

//router
import router from "./router";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// errorHandlingPlugin
import { errorHandler } from "@/commons/errorHandler";

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
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
const app = createApp(App);
const pinia = createPinia();

pinia.use(createPersistedState());
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(errorHandler);
app.mount("#app");
