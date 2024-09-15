import { Tokens } from "@/types";
import { create } from "zustand";

interface IAuthStore {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  setTokens: ({ access_token, refresh_token }: Tokens) => void;
  clearTokens: () => void;
}

const AuthStore = create<IAuthStore>((set) => ({
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  setTokens: ({ access_token, refresh_token }) => {
    // TODO: Maybe decode access token if there will be data in it
    set({ accessToken: access_token, refreshToken: refresh_token, isLoggedIn: true });
    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("refreshToken", refresh_token);
  },
  clearTokens: () => {
    set({ accessToken: "", isLoggedIn: false });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
}));

export default AuthStore;

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

if (accessToken && refreshToken) {
  AuthStore.getState().setTokens({ access_token: accessToken, refresh_token: refreshToken });
}
