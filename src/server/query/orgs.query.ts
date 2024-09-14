import { useQuery } from "@tanstack/react-query";
import { baseQuery } from ".";
import { OrgsServices } from "@/services";
import { AuthStore } from "@/stores";
import { Org } from "@/types";

export const useOrgsQuery = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);

  const getOrgs = async () =>
    await OrgsServices.getCurrentUserOrgs().catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return useQuery<Org[]>({
    queryKey: ["orgs"],
    queryFn: getOrgs,
    enabled: isLoggedIn,
    ...baseQuery,
    placeholderData: [],
  });
};
