import { useQuery } from "@tanstack/react-query";
import { baseQuery } from ".";
import { AuthServices } from "@/services";

export const useGetCurrentUserQuery = () => {
  const getCurrentUser = async () =>
    await AuthServices.getCurrentUser().catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    ...baseQuery,
  });
};
