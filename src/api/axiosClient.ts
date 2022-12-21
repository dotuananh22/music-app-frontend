import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "config";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Handle token here ...
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    return error.response.data;
  }
);

export default axiosClient;
