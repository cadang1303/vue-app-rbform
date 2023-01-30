export default {
  namespaced: true,
  state: {
    isShow: false,
  },
  getters: {
    getLoadingState: (state) => state.isShow,
  },
  mutations: {
    SET_LOADING_STATE(state, payload) {
      state.isShow = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("SET_LOADING_STATE", payload);
    },
  },
};
