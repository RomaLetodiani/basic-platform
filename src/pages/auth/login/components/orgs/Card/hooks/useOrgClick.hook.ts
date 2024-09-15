import { OrgStore } from "@/stores";
import { useNavigate } from "react-router-dom";

const useOrgClick = () => {
  const setLastOrgId = OrgStore((state) => state.setLastOrgId);
  const navigate = useNavigate();

  const handleOrgClick = async (orgId: string) => {
    await setLastOrgId(orgId).then(() => {
      navigate(`/orgs/${orgId}`);
    });
  };

  return handleOrgClick;
};

export default useOrgClick;
