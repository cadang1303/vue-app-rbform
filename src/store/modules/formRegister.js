export default {
  namespaced: true,
  state: {
    formAccount: [],
    formProfile: [],
    formFinished: [],
  },
  getters: {
    getFormAccount: (state) => state.formAccount,
    getFormProfile: (state) => state.formProfile,
    getFormFinished: (state) => state.formFinished,
  },
  mutations: {
    SAVE_FORM(state, form) {
      state[form.formName] = form.formData;
    },
    CLEAR_FORM_REGISTER(state) {
      state.formAccount = [];
      state.formProfile = [];
      state.formFinished = [];
    },
  },
  actions: {
    saveForm({ commit }, payload) {
      commit("SAVE_FORM", payload);
      if (payload.isLastForm) {
        commit("CLEAR_FORM_REGISTER");
      }
    },
  },
};
