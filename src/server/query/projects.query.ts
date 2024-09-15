import { useQuery } from "@tanstack/react-query";
import { baseQuery } from ".";
import { ProjectServices } from "@/services";

export const useProjectsQuery = (orgId: string) => {
  const getProjects = async () =>
    await ProjectServices.getCurrentOrgProjects(orgId).catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return useQuery({
    queryKey: ["projects", orgId],
    queryFn: getProjects,
    ...baseQuery,
  });
};
