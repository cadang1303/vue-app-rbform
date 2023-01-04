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
    REMOVE_NOTIFICATION(state, notification) {
      state.notifications = state.notifications.filter((noti) => {
        return noti.id != notification.id;
      });
    },
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("PUSH_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
};
