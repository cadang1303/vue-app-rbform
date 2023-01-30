import { API_URL } from "@/constants";
import axios from "axios";

const userApi = axios.create({
  baseURL: API_URL,
  //   timeout: 1000,
  // headers: { Authorization: "Bearer {token}" },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default userApi;
