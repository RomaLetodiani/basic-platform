import { ProjectStore } from "@/stores";

const useMenuItems = () => {
  const lastProjectId = ProjectStore((state) => state.lastProjectId);

  return [
    {
      title: "Overview",
      path: `${lastProjectId}`,
    },
    {
      title: "Chats",
      path: `${lastProjectId}/chat`,
    },
    {
      title: "Knowledge Base",
      path: `${lastProjectId}/knowledge-base`,
    },
    {
      title: "Dialog Flow",
      path: `${lastProjectId}/dialog-flow`,
    },
    {
      title: "Integrations",
      path: `${lastProjectId}/integrations`,
    },
    {
      title: "Extensions",
      path: `${lastProjectId}/extensions`,
    },
  ];
};

export default useMenuItems;
