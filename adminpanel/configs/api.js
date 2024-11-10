import axios from "axios";

import { getCookie } from "@/utils/cookie";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    if (request.method !== "get") {
      const token = getCookie("token");
      if (token) request.headers["Authorization"] = `bearer ${token}`;
    }

    return request;
  },
  (error) => Promise.reject(error)
);

export default api;
