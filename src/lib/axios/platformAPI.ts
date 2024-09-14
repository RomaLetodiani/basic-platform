import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { AuthServices } from "@/services";
import { AuthStore } from "@/stores";
import env from "@/env";
import qs from "qs";

const platformAPI = axios.create({
  baseURL: env.VITE_PLATFORM_API_BASE_URL,
});

export const refreshTokenPlatformApi = axios.create({
  baseURL: env.VITE_PLATFORM_API_BASE_URL,
});

platformAPI.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

refreshTokenPlatformApi.interceptors.request.use((config) => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    config.headers["Authorization"] = `Bearer ${refreshToken}`;
  }

  return config;
});

platformAPI.interceptors.response.use(
  ({ data }) => data.data,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const localRefreshToken = localStorage.getItem("refreshToken");

        if (!localRefreshToken) {
          AuthStore.getState().clearTokens();
          throw new Error("No refresh token found");
        }

        const tokens = await AuthServices.refreshTokens();

        AuthStore.getState().setTokens(tokens);

        originalRequest.headers["Authorization"] = `Bearer ${tokens.accessToken}`;

        return platformAPI(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh tokens", refreshError);
        AuthStore.getState().clearTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default platformAPI;
