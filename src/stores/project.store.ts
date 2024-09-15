import { create } from "zustand";

interface IProjectStore {
  lastProjectId: string;
  loading: boolean;
  setLastProjectId: (lastProjectId: string) => Promise<void>;
}

const ProjectStore = create<IProjectStore>((set) => ({
  lastProjectId: "",
  loading: false,
  setLastProjectId: async (lastProjectId: string) => {
    set({ loading: true });
    // TODO: Check Permissions
    const fakeApiCall = () => new Promise((resolve) => setTimeout(resolve, 2000));
    await fakeApiCall()
      .then(() => {
        console.log("Permissions checked successfully for project");
        // throw new Error("Permissions checked successfully for project");
      })
      .catch(() => {
        console.log("Permissions checked failed for project");
        throw new Error("Permissions checked failed for project");
      })
      .then(() => {
        set({ lastProjectId });
        localStorage.setItem("lastProjectId", lastProjectId);
      })
      .finally(() => set({ loading: false }));
  },
}));

export default ProjectStore;
