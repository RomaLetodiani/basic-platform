import { Outlet } from "react-router-dom";
import RootSuspense from "./Root.suspense";
import { Suspense } from "react";
import { useRootNavigate } from "./hooks";

const Root = () => {
  const { orgLoading, projectLoading } = useRootNavigate();
  if (orgLoading || projectLoading) return <RootSuspense />;

  return (
    <Suspense fallback={<RootSuspense />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
