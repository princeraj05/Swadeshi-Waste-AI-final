// src/api/axios.js
import axios from "axios";
import { auth } from "../firebase";

const api = axios.create({
  baseURL: "https://swadeshi-waste-ai-final.onrender.com/api",
  withCredentials: false, // firebase token will be sent in headers
});

// Attach Firebase Token Automatically
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;