import axios, { AxiosInstance } from "axios";

export const useAxiosInstance = (): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login"; // TODO testar se funciona
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
