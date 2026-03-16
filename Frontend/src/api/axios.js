// src/api/axios.js
import axios from "axios";
import { auth } from "../firebase";

const api = axios.create({
  baseURL: "https://swadeshi-waste-ai-final.onrender.com/api",
  withCredentials: false,
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken(true); // force fresh token
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;