import { platformAPI } from "@/lib";
import { Org } from "@/types";

const OrgsServices = {
  getCurrentUserOrgs: (): Promise<Org[]> => platformAPI.get("orgs"),
};

export default OrgsServices;
