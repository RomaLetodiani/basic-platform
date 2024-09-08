import { useQuery } from "@tanstack/react-query";
import { baseQuery } from ".";
import { OrgsServices } from "@/services";

export const useOrgsQuery = () => {
  const getOrgs = async () =>
    await OrgsServices.getCurrentUserOrgs().catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return useQuery({
    queryKey: ["orgs"],
    queryFn: getOrgs,
    ...baseQuery,
  });
};
