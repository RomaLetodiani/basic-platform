import { platformAPI, refreshTokenPlatformApi } from "@/lib";
import { Tokens } from "@/types";

const AuthServices = {
  localLogin: async (body: { email: string; password: string }): Promise<Tokens> => {
    const formData = new FormData();

    formData.append("username", body.email);
    formData.append("password", body.password);

    const response = await platformAPI.post("auth/local/login", formData);
    return response.data;
  },

  googleAuth: async (access_token: string): Promise<Tokens> => {
    const response = await platformAPI.post("auth/google", { token: access_token });
    return response.data;
  },

  microsoftAuth: async (accessToken: string): Promise<Tokens> => {
    const response = await platformAPI.post("auth/microsoft", { token: accessToken });
    return response.data;
  },

  getCurrentUser: () => platformAPI.get("auth/me"),

  refreshTokens: (): Promise<Tokens> => refreshTokenPlatformApi.post("auth/refresh"),
};

export default AuthServices;
