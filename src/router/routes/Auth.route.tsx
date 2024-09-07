import { AuthStore } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
