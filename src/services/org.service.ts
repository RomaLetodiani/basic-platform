import { platformAPI } from "@/lib";
import { Org } from "@/types";

const OrgServices = {
  getCurrentUserOrgs: async (): Promise<Org[]> => {
    const response = await platformAPI.get("orgs");
    return response.data;
  },
  getOrgPermissions: (orgId: string): Promise<boolean> =>
    platformAPI.get(`orgs/${orgId}/permissions`),
};

export default OrgServices;
