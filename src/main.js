import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
// axios
import axios from "axios";
// Components
import Header from "@/components/Global/Header.vue";
import Footer from "@/components/Global/Footer.vue";
import General from "@/Global/General";

loadFonts();
const app = createApp(App);
app.config.globalProperties.$GeneralClass = General;
app.component("Header_", Header);
app.component("Footer_", Footer);
app.config.globalProperties.$http = axios;
app.use(router);
app.use(vuetify);
app.mount("#app");
