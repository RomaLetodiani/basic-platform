import { create } from "zustand";

interface IOrgStore {
  lastOrgId: string;
  setLastOrgId: (latestOrgId: string) => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const OrgStore = create<IOrgStore>((set) => ({
  lastOrgId: "",
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  setLastOrgId: async (lastOrgId: string) => {
    set({ loading: true });
    // TODO: Check Permissions
    const fakeApiCall = () => new Promise((resolve) => setTimeout(resolve, 4000));
    await fakeApiCall()
      .then(() => {
        console.log("Permissions checked successfully for org");
        // throw new Error("Permissions checked successfully for org");
      })
      .finally(() => {
        set({ lastOrgId, loading: false });
        localStorage.setItem("lastOrgId", lastOrgId);
      });
  },
}));

export default OrgStore;
