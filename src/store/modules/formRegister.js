export default {
  namespaced: true,
  state: {
    formRegister: [],
  },
  getters: {
    getFormRegister: (state) => state.formRegister,
  },
  mutations: {
    SET_FORM(state, form) {
      state.multiform[form.name] = form;
    },
  },
  actions: {
    setForm({ commit }, payload) {
      commit("SET_FORM", payload);
    },
  },
};
