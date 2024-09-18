import { ProjectStore } from "@/stores";

const useMenuItems = () => {
  const lastProjectId = ProjectStore((state) => state.lastProjectId);

  return {
    overview: {
      title: "Project Overview",
      path: `${lastProjectId}`,
    },
    chats: {
      title: "Chats",
      path: `${lastProjectId}/chats`,
    },
    knowledgeBase: {
      title: "Knowledge Base",
      path: `${lastProjectId}/knowledge-base`,
    },
    dialogFlow: {
      title: "Dialog Flow",
      path: `${lastProjectId}/dialog-flow`,
    },
    integrations: {
      title: "Integrations",
      path: `${lastProjectId}/integrations`,
    },
    extensions: {
      title: "Extensions",
      path: `${lastProjectId}/extensions`,
    },
  };
};

export default useMenuItems;
