import axios from "axios";
import { API_URL } from "@/constants";

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
      state.avatar = payload;
    },
  },
  actions: {
    async loadUserList({ commit }) {
      const res = await axios.get(`${API_URL}users`);
      commit("SET_USER_LIST", res.data);
    },
    findByUserLogin({ commit }, payload) {
      axios
        .get(`${API_URL}users/${payload.id}`)
        .then((res) => {
          console.log(res.data);
          commit("LOG_IN", res.data);
        })
        .catch((err) => console.log(err));
    },
    onLogOut({ commit }) {
      commit("LOG_OUT");
    },
    onLogin({ dispatch }, payload) {
      axios
        .post(`${API_URL}auth/login`, payload)
        .then((res) => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "success",
                message: "Login Successfully",
              },
              { root: true }
            );
          }, 3000);
          dispatch("findByUserLogin", res.data);
        })
        .catch(() => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "error",
                message: "Login Failed",
              },
              { root: true }
            );
          }, 3000);
        });
    },
    onUpdateStatus({ dispatch }, payload) {
      axios
        .post(`${API_URL}users/status`, payload)
        .then((res) => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "success",
                message: res.data.message,
              },
              { root: true }
            );
          }, 3000);

          this.$router.go(-1);
        })
        .catch((err) => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "error",
                message: err.data.message,
              },
              { root: true }
            );
          }, 3000);
        });
    },
    async onUploadFile({ commit }, payload) {
      let formData = new FormData();
      if (payload) {
        formData.append("file", payload[0]);
        try {
          const res = await axios.post(`${API_URL}users/upload`, formData);
          commit("SAVE_AVATAR", res.data.path);
        } catch (err) {
          console.log(err);
        }
      }
    },
    onSignUp({ dispatch }, data) {
      axios
        .post(`${API_URL}auth/signup`, data)
        .then(() => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "success",
                message: "Registered Successfully",
              },
              { root: true }
            );
          }, 3000);
        })
        .catch(() => {
          dispatch("loading/setLoading", true, { root: true });
          setTimeout(() => {
            dispatch("loading/setLoading", false, { root: true });
            dispatch(
              "notifications/addNotification",
              {
                type: "error",
                message: "Register Failed",
              },
              { root: true }
            );
          }, 3000);
        });
    },
  },
};
