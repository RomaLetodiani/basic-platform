import { AuthStore, OrgStore, ProjectStore } from "@/stores";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const lastOrgId = OrgStore((state) => state.lastOrgId);
  const lastProjectId = ProjectStore((state) => state.lastProjectId);
  const location = useLocation();
  const from = location.state?.from ?? "/";

  if (!isLoggedIn) {
    return <Outlet />; // Allow access if not logged in (for public routes)
  }

  // Redirect based on Org and Project IDs
  if (lastOrgId) {
    const targetPath = lastProjectId ? from : `/orgs/${lastOrgId}`;
    return <Navigate to={targetPath} />;
  }

  return <Outlet />; // Default behavior if no specific redirect
};

export default AuthRoute;
