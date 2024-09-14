import { useMutation } from "@tanstack/react-query";
import { AuthServices } from "@/services";
import { useCallback } from "react";
import { AuthStore } from "@/stores";
import { Tokens } from "@/types";

const useAuthMutations = () => {
  const setTokens = AuthStore((state) => state.setTokens);

  const onSuccess = useCallback(
    (tokens: Tokens) => {
      setTokens(tokens);
      console.log("Login successful");
    },
    [setTokens],
  );

  const onError = useCallback((error: Error) => {
    console.error("❌ ~ AuthServices.login ~ error", error);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginMutation = useMutation<any, Error, any>({
    mutationFn: AuthServices.localLogin,
    onSuccess,
    onError,
  });

  const googleLoginMutation = useMutation<Tokens, Error, string>({
    mutationFn: AuthServices.googleLogin,
    onSuccess,
    onError,
  });

  return { loginMutation, googleLoginMutation };
};

export default useAuthMutations;
