import { AuthStore, OrgStore, ProjectStore } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const lastOrgId = OrgStore((state) => state.lastOrgId);
  const lastProjectId = ProjectStore((state) => state.lastProjectId);

  if (!isLoggedIn) {
    return <Outlet />; // Allow access if not logged in (for public routes)
  }

  // Redirect based on Org and Project IDs
  if (lastOrgId) {
    const targetPath = `/orgs/${lastOrgId}${lastProjectId ? `/projects/${lastProjectId}` : ""}`;
    return <Navigate to={targetPath} />;
  }

  return <Outlet />; // Default behavior if no specific redirect
};

export default AuthRoute;
