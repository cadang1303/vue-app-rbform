import axios from "axios";
import { API_URL } from "@/constants";

export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async loadUserList({ commit }) {
      const res = await axios.get(`${API_URL}users`);
      commit("SET_USER_LIST", res.data);
    },
    onLogin({ dispatch }, payload) {
      console.log(payload);
      axios
        .post(`${API_URL}auth/login`, {
          username: payload.username,
          password: payload.password,
        })
        .then(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: "Login Successfully",
            },
            { root: true }
          );
        })
        .catch(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: "Login Failed",
            },
            { root: true }
          );
        });
    },
    onSignUp({ dispatch }, data) {
      axios
        .post(`${API_URL}auth/signup`, {
          username: data.username,
          fullname: data.fullname,
          password: data.password,
          birthday: data.birthday,
          address: data.address,
          describe_yourself: data.describe_yourself,
          status: 0,
          salary: data.salary,
          reason: data.reason,
        })
        .then(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "success",
              message: "Registered Successfully",
            },
            { root: true }
          );
        })
        .catch(() => {
          dispatch(
            "notifications/addNotification",
            {
              type: "error",
              message: "Register Failed",
            },
            { root: true }
          );
        });
    },
  },
};
