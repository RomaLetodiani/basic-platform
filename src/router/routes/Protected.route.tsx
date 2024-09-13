import { AuthStore, OrgStore } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const latestOrgId = OrgStore((state) => state.lastOrgId);

  const redirectedFrom = localStorage.getItem("redirectedFrom") ?? "/";

  return isLoggedIn && latestOrgId ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        from: redirectedFrom,
      }}
    />
  );
};

export default ProtectedRoute;
