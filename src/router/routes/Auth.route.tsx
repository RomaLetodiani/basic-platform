import { AuthStore, OrgStore, ProjectStore } from "@/stores";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const lastOrgId = OrgStore((state) => state.lastOrgId);
  const lastProjectId = ProjectStore((state) => state.lastProjectId);
  const location = useLocation();
  const from = location.state?.from ?? "/";

  return isLoggedIn && lastOrgId && lastProjectId ? <Navigate to={from} /> : <Outlet />;
};

export default AuthRoute;
