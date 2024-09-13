import { create } from "zustand";

interface IProjectStore {
  latestProjectId: string;
  setLatestProjectId: (latestProjectId: string) => void;
}

const ProjectStore = create<IProjectStore>((set) => ({
  latestProjectId: "",
  setLatestProjectId: (latestProjectId: string) => {
    // TODO: Check Permissions
    set({ latestProjectId });
    localStorage.setItem("latestProjectId", latestProjectId);
  },
}));

export default ProjectStore;

const latestProjectId = localStorage.getItem("latestProjectId");

if (latestProjectId) {
  ProjectStore.getState().setLatestProjectId(latestProjectId);
}
