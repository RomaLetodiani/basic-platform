import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { OrgStore } from "@/stores";

const useOrgNavigate = () => {
  const navigate = useNavigate();
  const lastOrgId = OrgStore((state) => state.lastOrgId);

  useEffect(() => {
    if (lastOrgId) {
      navigate(`/org/${lastOrgId}`);
    }
  }, [lastOrgId, navigate]);
};

export default useOrgNavigate;
