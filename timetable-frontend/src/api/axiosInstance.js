import axios from "axios";
import { getToken } from "../utils/token";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9097",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    // Do not attach the token when logging in
    if (token && !config.url.includes("/auth/login")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;