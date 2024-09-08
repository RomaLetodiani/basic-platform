import { platformAPI } from "@/lib";

const ProjectsServices = {
  getCurrentOrgProjects: (orgId: string) => platformAPI.get(`projects/${orgId}`),
};

export default ProjectsServices;
