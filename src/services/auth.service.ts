import { platformAPI } from "@/lib";

const AuthServices = {
  localLogin: (body: { email: string; password: string }): Promise<string> =>
    platformAPI.post("auth/local/login", body),
  googleLogin: (access_token: string): Promise<string> =>
    platformAPI.post("auth/google/login", { access_token }),
  getCurrentUser: () => platformAPI.get("auth/me"),
};

export default AuthServices;
