export default {
  namespaced: true,
  state: {
    formAccount: [],
    formProfile: [],
    formFinished: [],
    formRegister: [],
  },
  getters: {
    getFormAccount: (state) => state.formAccount,
    getFormProfile: (state) => state.formProfile,
    getFormFinished: (state) => state.formFinished,
    getFormRegister: (state) => state.formRegister,
  },
  mutations: {
    SAVE_FORM(state, form) {
      state[form.formName] = form;
    },
    SAVE_DATA(state, data) {
      state.formRegister = data;
    },
    CLEAR_FORM_REGISTER(state) {
      state.formAccount = [];
      state.formProfile = [];
      state.formFinished = [];
      state.formRegister = [];
    },
  },
  actions: {
    saveForm({ commit }, payload) {
      commit("SAVE_FORM", payload);
      if (payload.isLastForm) {
        commit("CLEAR_FORM_REGISTER");
      }
    },
    saveData({ commit }, payload) {
      commit("SAVE_DATA", payload);
    },
  },
};
