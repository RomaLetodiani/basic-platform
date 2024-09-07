import env from "@/env";
import axios from "axios";
import qs from "qs";

const convoAPI = axios.create({
  baseURL: env.CONVO_API_BASE_URL,
});

convoAPI.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export default convoAPI;
