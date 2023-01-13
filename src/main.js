import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/reset.css";
import axios from "axios";
import { API_URL } from "./constants";

axios.defaults.baseURL = API_URL;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
