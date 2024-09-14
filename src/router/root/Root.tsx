import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import RootSuspense from "./Root.suspense";

const Root = () => {
  return (
    <Suspense fallback={<RootSuspense />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
