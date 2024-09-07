import { platformAPI } from "@/lib";

const AuthServices = {
  localLogin: (body: { email: string; password: string }) =>
    platformAPI.post("auth/local/login", body),
};

export default AuthServices;
