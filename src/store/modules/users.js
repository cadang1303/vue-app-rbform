import axios from "axios";
import { API_URL } from "@/constants";
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
      const res = await axios.get(`${API_URL}users`);
      commit("SET_USER_LIST", res.data);
    },
    async getLoggedUser({ commit }) {
      let id = getUser();
      try {
        const res = await axios.get(`${API_URL}users/${id}`);
        commit("LOG_IN", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async findByUserLogin({ commit }, payload) {
      try {
        const res = await axios.get(`${API_URL}users/${payload.id}`);
        commit("LOG_IN", res.data);
        setUser(res.data.id);
      } catch (err) {
        console.log(err);
      }
    },
    onLogOut({ commit, dispatch }) {
      commit("LOG_OUT");
      removeUser();
      dispatch("loading/setLoading", true, { root: true });
      setTimeout(() => {
        dispatch("loading/setLoading", false, { root: true });
        dispatch(
          "notifications/addNotification",
          {
            type: "success",
            message: "Logout Successfully",
          },
          { root: true }
        );
      }, 2000);
    },
    async onLogin({ dispatch }, payload) {
      try {
        const res = await axios.post(`${API_URL}auth/login`, payload);
        dispatch("loading/setLoading", true, { root: true });
        dispatch("findByUserLogin", res.data);
        setTimeout(() => {
          router.push({ name: "request-list" });
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: "Login Successfully",
            },
            { root: true }
          );
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
      } catch (err) {
        console.log(err);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: `Login Failed: ${err.response.data.message}`,
            },
            { root: true }
          );
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
      }
    },
    async onUpdateStatus({ dispatch }, payload) {
      try {
        const res = await axios.post(`${API_URL}users/status`, payload);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: res.data.message,
            },
            { root: true }
          );
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
        router.go(-1);
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
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
      }
    },
    async onUploadFile({ commit }, payload) {
      let formData = new FormData();
      if (payload) {
        formData.append("file", payload[0]);
        try {
          const res = await axios.post(`${API_URL}users/upload`, formData);
          commit("SAVE_AVATAR", res.data.filename);
        } catch (err) {
          console.log(err);
        }
      }
    },
    async onSignUp({ dispatch }, data) {
      try {
        await axios.post(`${API_URL}auth/signup`, data);
        dispatch("loading/setLoading", true, { root: true });
        setTimeout(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: "Registered Successfully",
            },
            { root: true }
          );
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
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
          dispatch("loading/setLoading", false, { root: true });
        }, 2000);
      }
    },
  },
};
