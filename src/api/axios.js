import axios from "axios";

const api = axios.create({
  baseURL: "https://api.refit.my",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
