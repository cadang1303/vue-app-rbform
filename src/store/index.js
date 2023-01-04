import Vue from "vue";
import Vuex from "vuex";
import notifications from "./modules/notifications";
import loading from "./modules/loading";
import formRegister from "./modules/formRegister";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    formRegister,
    notifications,
    loading,
  },
});
