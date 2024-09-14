import { AuthStore, OrgStore } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const latestOrgId = OrgStore((state) => state.lastOrgId);

  return isLoggedIn && latestOrgId ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
