import { platformAPI, refreshTokenPlatformApi } from "@/lib";
import { Tokens, User } from "@/types";

const AuthServices = {
  localLogin: async (body: { email: string; password: string }): Promise<Tokens> => {
    const formData = new FormData();

    formData.append("username", body.email);
    formData.append("password", body.password);

    return await platformAPI.post("auth/local/login", formData);
  },

  googleAuth: (access_token: string): Promise<Tokens> =>
    platformAPI.post("auth/google", { token: access_token }),

  microsoftAuth: (accessToken: string): Promise<Tokens> =>
    platformAPI.post("auth/microsoft", { token: accessToken }),
  getCurrentUser: (): Promise<User> => platformAPI.get("auth/me"),

  refreshTokens: (): Promise<Tokens> => refreshTokenPlatformApi.post("auth/refresh"),
};

export default AuthServices;
