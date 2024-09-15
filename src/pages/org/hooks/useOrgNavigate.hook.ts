import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { OrgStore } from "@/stores";

const useOrgNavigate = () => {
  const navigate = useNavigate();
  const { orgId } = useParams();
  const lastOrgId = OrgStore((state) => state.lastOrgId);

  useEffect(() => {
    if (orgId) {
      return;
    }

    if (lastOrgId) {
      return navigate(`/org/${lastOrgId}`);
    }

    navigate("/login");
  }, [lastOrgId, orgId, navigate]);

  return { orgId };
};

export default useOrgNavigate;
