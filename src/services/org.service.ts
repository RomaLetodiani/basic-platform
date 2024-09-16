import { platformAPI } from "@/lib";
import { Org } from "@/types";

const OrgServices = {
  getCurrentUserOrgs: (): Promise<Org[]> => platformAPI.get("orgs"),
  getOrgPermissions: (orgId: string): Promise<boolean> =>
    platformAPI.get(`orgs/${orgId}/permissions`),
};

export default OrgServices;
