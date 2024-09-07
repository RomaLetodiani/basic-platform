import env from "@/env";
import axios from "axios";
import qs from "qs";

const platformAPI = axios.create({
  baseURL: env.PLATFORM_API_BASE_URL,
});

platformAPI.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export default platformAPI;
