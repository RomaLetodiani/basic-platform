import { useOrgNavigate } from ".";

const useMenuItems = () => {
  const { orgId } = useOrgNavigate();

  return {
    overview: {
      title: "Overview",
      path: `${orgId}`,
    },
    projects: {
      title: "Projects",
      path: `${orgId}/projects`,
    },
    team: {
      title: "Team",
      path: `${orgId}/team`,
    },
  };
};

export default useMenuItems;
