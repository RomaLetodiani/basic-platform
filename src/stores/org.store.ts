import { create } from "zustand";

interface IOrgStore {
  lastOrgId: string;
  setLastOrgId: (latestOrgId: string) => Promise<void>;
}

const OrgStore = create<IOrgStore>((set) => ({
  lastOrgId: "",
  setLastOrgId: async (lastOrgId: string) => {
    // TODO: Check Permissions
    const fakeApiCall = () => new Promise((resolve) => setTimeout(resolve, 1000));
    await fakeApiCall();
    set({ lastOrgId });
    localStorage.setItem("lastOrgId", lastOrgId);
  },
}));

export default OrgStore;

const lastOrgId = localStorage.getItem("lastOrgId");

if (lastOrgId) {
  OrgStore.getState().setLastOrgId(lastOrgId);
}
