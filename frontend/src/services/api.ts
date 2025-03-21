import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Base API URL
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN; // Bearer token
console.log(BEARER_TOKEN, API_BASE_URL)
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const getTopUsers = async () => {
  const response = await api.get("/users");
  console.log(response.data)
  return response.data;
};

export const getTrendingPosts = async (userId: string) => {
  const response = await api.get(`/users/${userId}/posts`);
  console.log(response.data)
  return response.data;
};


export const getFeed = async () => {
  const response = await api.get("/feed");
  return response.data;
};

export default api;
