import { platformAPI, refreshTokenPlatformApi } from "@/lib";
import { Tokens } from "@/types";

const AuthServices = {
  localLogin: async (body: { email: string; password: string }): Promise<Tokens> => {
    const formData = new FormData();

    formData.append("username", body.email);
    formData.append("password", body.password);

    return await platformAPI.post("auth/local/login", formData);
  },

  googleLogin: (access_token: string): Promise<Tokens> => platformAPI.post("auth/google/login", { token: access_token }),

  microsoftLogin: (accessToken: string): Promise<Tokens> => platformAPI.post("auth/microsoft/login", { token: accessToken }),
  getCurrentUser: () => platformAPI.get("auth/me"),

  refreshTokens: (): Promise<Tokens> => refreshTokenPlatformApi.post("auth/refresh"),
};

export default AuthServices;
