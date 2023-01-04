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
  },
  actions: {
    saveForm({ commit, dispatch }, payload) {
      commit("SAVE_FORM", payload);
      if (payload.isLastForm) {
        dispatch(
          "notifications/addNotification",
          {
            type: "success",
            message: "Registered succesfully!",
          },
          { root: true }
        );
      }
    },
  },
};
