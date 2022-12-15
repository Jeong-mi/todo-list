import axios from "axios";

const instance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");

    config.headers["Content-Type"] = "application/json; charset=utf-8";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
