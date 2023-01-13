export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  getters: {
    notifications: (state) => state.notifications,
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
      });
    },
    REMOVE_NOTIFICATION(state, id) {
      state.notifications = state.notifications.filter((noti) => {
        return noti.id != id;
      });
    },
  },
  actions: {
    addNotification({ commit }, payload) {
      commit("PUSH_NOTIFICATION", payload);
    },
    removeNotification({ commit }, payload) {
      commit("REMOVE_NOTIFICATION", payload);
    },
  },
};
