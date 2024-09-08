import { platformAPI } from "@/lib";

const AuthServices = {
  localLogin: (body: { email: string; password: string }) =>
    platformAPI.post("auth/local/login", body),
  getCurrentUser: () => platformAPI.get("auth/me"),
};

export default AuthServices;
