import { create } from "zustand";

interface IOrgStore {
  lastOrgId: string;
  loading: boolean;
  setLastOrgId: (latestOrgId: string) => Promise<void>;
}

const OrgStore = create<IOrgStore>((set) => ({
  lastOrgId: "",
  loading: false,
  setLastOrgId: async (lastOrgId: string) => {
    set({ loading: true });
    // TODO: Check Permissions
    const fakeApiCall = () => new Promise((resolve) => setTimeout(resolve, 5000));
    await fakeApiCall().then(() => {
      console.log("Permissions checked successfully");
    });
    set({ lastOrgId, loading: false });
    localStorage.setItem("lastOrgId", lastOrgId);
  },
}));

export default OrgStore;
