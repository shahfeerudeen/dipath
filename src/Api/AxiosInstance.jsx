// src/Api/AxiosInstance.js

import axios from "axios";

function generateRequestId() {
  return (
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).substring(2, 10)
  );
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor: add token + request ID
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["X-Request-ID"] = generateRequestId();

    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.code === "ECONNABORTED") {
      alert("Request timed out. Please try again.");
    } else if (error.response) {
      const status = error.response.status;

      // Optional: handle unauthorized
      if (status === 401 || status === 403) {
        localStorage.clear();
        window.location.replace("/login");
      } else {
        console.error("API Error:", error.response.data);
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
