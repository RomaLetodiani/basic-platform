import { useMutation } from "@tanstack/react-query";
import { AuthServices } from "@/services";
import { useCallback } from "react";
import { AuthStore } from "@/stores";

const useAuthMutations = () => {
  const setTokens = AuthStore((state) => state.setTokens);

  const onSuccess = useCallback(
    (accessToken: string) => {
      setTokens(accessToken);
      console.log("Login successful");
    },
    [setTokens],
  );

  const onError = useCallback((error: Error) => {
    console.error("❌ ~ AuthServices.login ~ error", error);
  }, []);

  // TODO: fix any type
  const loginMutation = useMutation<any, Error, any>({
    mutationFn: AuthServices.localLogin,
    onSuccess,
    onError,
  });

  const googleLoginMutation = useMutation<string, Error, string>({
    mutationFn: AuthServices.googleLogin,
    onSuccess,
    onError,
  });

  return { loginMutation, googleLoginMutation };
};

export default useAuthMutations;
