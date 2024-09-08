import { platformAPI } from "@/lib";

const OrgsServices = {
  getCurrentUserOrgs: () => platformAPI.get("orgs/current-user-orgs"),
};

export default OrgsServices;
