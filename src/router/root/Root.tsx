import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { OrgStore } from "@/stores";
import RootSuspense from "./Root.suspense";

const Root = () => {
  const setLastOrgId = OrgStore((state) => state.setLastOrgId);
  const orgLoading = OrgStore((state) => state.loading);

  useEffect(() => {
    const lastOrgId = localStorage.getItem("lastOrgId");

    if (lastOrgId) setLastOrgId(lastOrgId);
  }, [setLastOrgId]);

  if (orgLoading) return <RootSuspense />;

  return (
    <Suspense fallback={<RootSuspense />}>
      <Outlet />
    </Suspense>
  );
};

export default Root;
