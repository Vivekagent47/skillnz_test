import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800",
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("profile")) {
      config.headers.Authorization = `Bearer ${JSON.stringify(
        localStorage.getItem("profile")
      )}`;
    }
    return config;
  },
  (err) => {}
);

export default instance;
