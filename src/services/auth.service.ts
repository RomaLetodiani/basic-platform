import { platformAPI, refreshTokenPlatformApi } from "@/lib";
import { Tokens } from "@/types";

const AuthServices = {
  localLogin: async (body: { email: string; password: string }): Promise<Tokens> => {
    const formData = new FormData();
    formData.append("username", body.email);
    formData.append("password", body.password);

    const resp = await platformAPI.post("auth/local/login", formData);

    return resp.data;
  },
  googleLogin: (access_token: string): Promise<Tokens> =>
    platformAPI.post("auth/google/login", { access_token }),
  getCurrentUser: () => platformAPI.get("auth/me"),
  refreshTokens: (): Promise<Tokens> => refreshTokenPlatformApi.post("auth/refresh"),
};

export default AuthServices;
