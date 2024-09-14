import { create } from "zustand";

interface IProjectStore {
  lastProjectId: string;
  setLastProjectId: (lastProjectId: string) => void;
}

const ProjectStore = create<IProjectStore>((set) => ({
  lastProjectId: "",
  setLastProjectId: (lastProjectId: string) => {
    // TODO: Check Permissions
    set({ lastProjectId });
    localStorage.setItem("lastProjectId", lastProjectId);
  },
}));

export default ProjectStore;

const lastProjectId = localStorage.getItem("lastProjectId");

if (lastProjectId) {
  ProjectStore.getState().setLastProjectId(lastProjectId);
}
