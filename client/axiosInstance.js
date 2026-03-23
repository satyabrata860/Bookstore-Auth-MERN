import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const bookBaseUrl = axios.create({
  baseURL: `${baseURL}/book`,
});

export const userBaseUrl = axios.create({
  baseURL: `${baseURL}/user`,
});

bookBaseUrl.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("userAuth");
    const token = JSON.parse(authToken)?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("auth-req-errr", error);
  },
);

bookBaseUrl.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("userAuth");
      window.location.href = "/login";
    }
  },
);
