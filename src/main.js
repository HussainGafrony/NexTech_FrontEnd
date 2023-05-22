import { createApp } from "vue";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// axios
import axios from "axios";
// Components
import Header from "@/components/Global/Header.vue";
import General from "@/Global/General";

import router from "./router";

const vuetify = createVuetify({
  components,
  directives,

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$GeneralClass = General;
app.use(router);
app.use(vuetify);
app.component("Header_page", Header);
app.mount("#app");
