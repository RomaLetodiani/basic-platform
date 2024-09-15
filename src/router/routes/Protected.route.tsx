import { AuthStore, OrgStore } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const latestOrgId = OrgStore((state) => state.lastOrgId);
  const orgLoading = OrgStore((state) => state.loading);

  return isLoggedIn && latestOrgId && !orgLoading ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
