import { Tokens } from "@/types";
import { create } from "zustand";

interface IAuthStore {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  setTokens: ({ accessToken, refreshToken }: Tokens) => void;
  clearTokens: () => void;
}

const AuthStore = create<IAuthStore>((set) => ({
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  setTokens: ({ accessToken, refreshToken }) => {
    // TODO: Maybe decode access token if there will be data in it
    set({ accessToken, refreshToken, isLoggedIn: true });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
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
  AuthStore.getState().setTokens({ accessToken, refreshToken });
}
