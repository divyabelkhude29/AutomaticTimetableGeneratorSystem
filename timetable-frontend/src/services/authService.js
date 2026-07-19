import axiosInstance from "../api/axiosInstance";

const login = async (username, password) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};

export default {
  login,
};