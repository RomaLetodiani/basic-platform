import { create } from "zustand";

interface IAuthStore {
  accessToken: string;
  isLoggedIn: boolean;
  setTokens: (accessToken: string) => void;
  clearTokens: () => void;
}

const AuthStore = create<IAuthStore>((set) => ({
  accessToken: "",
  isLoggedIn: false,
  setTokens: (accessToken: string) => {
    set({ accessToken, isLoggedIn: true });
    localStorage.setItem("accessToken", accessToken);
  },
  clearTokens: () => {
    set({ accessToken: "", isLoggedIn: false });
    localStorage.removeItem("accessToken");
  },
}));

export default AuthStore;

const accessToken = localStorage.getItem("accessToken");

if (accessToken) {
  AuthStore.getState().setTokens(accessToken);
}
