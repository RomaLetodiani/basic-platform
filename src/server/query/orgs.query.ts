import { useQuery } from "@tanstack/react-query";
import { baseQuery } from ".";
import { OrgServices } from "@/services";
import { AuthStore } from "@/stores";
import { Org } from "@/types";

export const useOrgsQuery = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);

  const getOrgs = async () =>
    await OrgServices.getCurrentUserOrgs().catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return useQuery<Org[]>({
    queryKey: ["orgs"],
    queryFn: getOrgs,
    enabled: isLoggedIn,
    ...baseQuery,
    placeholderData: [
      {
        id: "va",
        name: "Org 1",
      },
    ],
  });
};
