import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import RootSuspense from "./Root.suspense";

const Root = () => {
  return (
    <Suspense fallback={<RootSuspense />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
