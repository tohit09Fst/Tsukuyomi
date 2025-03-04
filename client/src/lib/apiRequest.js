import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://tsukuyomi-mhjk.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;