import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-mern-app-backend.onrender.com",
  withCredentials: true,
});
