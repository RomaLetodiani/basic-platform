import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import RootSuspense from "./Root.suspense";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const redirectedFrom = localStorage.getItem("redirectedFrom");
    if (!redirectedFrom) {
      localStorage.setItem("redirectedFrom", pathname);
    }
  }, [pathname]);

  return (
    <Suspense fallback={<RootSuspense />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
