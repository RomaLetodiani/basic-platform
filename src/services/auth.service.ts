import { platformAPI, refreshTokenPlatformApi } from "@/lib";
import { Tokens } from "@/types";

const AuthServices = {
  localLogin: (body: { email: string; password: string }): Promise<Tokens> =>
    platformAPI.post("auth/local/login", body),
  googleLogin: (access_token: string): Promise<Tokens> =>
    platformAPI.post("auth/google/login", { access_token }),
  getCurrentUser: () => platformAPI.get("auth/me"),
  refreshTokens: (): Promise<Tokens> => refreshTokenPlatformApi.post("auth/refresh"),
};

export default AuthServices;
