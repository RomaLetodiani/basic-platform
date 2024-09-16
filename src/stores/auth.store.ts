import { AuthServices } from "@/services";
import { Tokens, User } from "@/types";
import { create } from "zustand";

interface IAuthStore {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  user: User | null;
  setTokens: ({ access_token, refresh_token }: Tokens) => Promise<void>;
  clearTokens: () => void;
}

const AuthStore = create<IAuthStore>((set, get) => ({
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  user: null,
  setTokens: async ({ access_token, refresh_token }) => {
    if (!access_token || !refresh_token) {
      get().clearTokens();
      throw new Error("Access token or refresh token is missing");
    }

    await AuthServices.getCurrentUser()
      .then((user) => {
        set({ accessToken: access_token, refreshToken: refresh_token, isLoggedIn: true, user });
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
      })
      .catch((error) => {
        console.error("Error retrieving current user:", error);
        get().clearTokens();
        throw new Error(error);
      });
  },
  clearTokens: () => {
    set({ accessToken: "", refreshToken: "", user: null, isLoggedIn: false });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
}));

export default AuthStore;
