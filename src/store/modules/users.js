import userApi from "@/configs/axios";
import router from "@/router";
import { getUser, removeUser, setUser } from "@/utils/localStorage";

export default {
  namespaced: true,
  state: {
    users: [],
    user: {},
    avatar: "",
  },
  getters: {
    getUsers: (state) => state.users,
    getLoginUser: (state) => state.user,
    getAvatar: (state) => state.avatar,
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.users = payload;
    },
    LOG_IN(state, payload) {
      state.user = payload;
    },
    LOG_OUT(state) {
      state.user = null;
    },
    SAVE_AVATAR(state, payload) {
      state.avatar = "uploads/" + payload;
    },
  },
  actions: {
    async loadUserList({ commit }) {
      const res = await userApi.get("users");
      commit("SET_USER_LIST", res.data);
    },
    async getLoggedUser({ commit }) {
      let id = getUser();
      try {
        const res = await userApi.get(`users/${id}`);
        commit("LOG_IN", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async findByUserLogin({ commit }, payload) {
      try {
        const res = await userApi.get(`users/${payload.id}`);
        commit("LOG_IN", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    onLogOut({ commit, dispatch }) {
      dispatch("loading/setLoading", true, { root: true });
      setTimeout(() => {
        removeUser();
        router.push({ name: "home" });
        commit("LOG_OUT");
        dispatch(
          "notifications/addNotification",
          {
            type: "success",
            message: "Logout Successfully",
          },
          { root: true }
        );
      }, 1500);
    },
    async onLogin({ dispatch }, payload) {
      try {
        const res = await userApi.post("auth/login", payload);
        dispatch("findByUserLogin", res.data);
        setUser(res.data.id);
        dispatch("loading/setLoading", true, { root: true });
        router.push({ name: "request-list" });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: "Login Successfully",
            },
            { root: true }
          );
        }, 1500);
      } catch (err) {
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: `Login Failed: ${err.response.data.message}`,
              // position: "center",
            },
            { root: true }
          );
        }, 1500);
      }
    },
    async onUpdateStatus({ dispatch }, payload) {
      try {
        const res = await userApi.post("users/status", payload);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          router.go(-1);
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: res.data.message,
            },
            { root: true }
          );
        }, 1500);
      } catch (err) {
        console.log(err);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: "Update status failed",
            },
            { root: true }
          );
        }, 1500);
      }
    },
    async onUploadFile({ commit }, payload) {
      let formData = new FormData();
      if (payload) {
        formData.append("file", payload[0]);
        try {
          const res = await userApi.post("users/upload", formData);
          commit("SAVE_AVATAR", res.data.filename);
        } catch (err) {
          console.log(err);
        }
      }
    },
    async onSignUp({ dispatch }, data) {
      try {
        const res = await userApi.post("auth/signup", data);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: res.data.success ? "success" : "error",
              message: res.data.message,
            },
            { root: true }
          );
        }, 1500);
      } catch (err) {
        console.log(err);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: "Register Failed",
            },
            { root: true }
          );
        }, 1500);
      }
    },
  },
};
