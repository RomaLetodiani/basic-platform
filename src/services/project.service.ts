import { platformAPI } from "@/lib";

const ProjectServices = {
  getCurrentOrgProjects: (orgId: string) => platformAPI.get(`projects/${orgId}`),
};

export default ProjectServices;
