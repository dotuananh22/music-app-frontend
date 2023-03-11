import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://music-api-plb6.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosClient;
