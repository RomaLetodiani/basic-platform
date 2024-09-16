import { platformAPI } from "@/lib";
import { Project } from "@/types";

const ProjectServices = {
  getCurrentOrgProjects: (orgId: string): Promise<Project[]> =>
    platformAPI.get(`projects/${orgId}`),
};

export default ProjectServices;
