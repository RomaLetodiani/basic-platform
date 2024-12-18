import { useMutation } from "@tanstack/react-query";
import { AuthServices } from "@/services";
import { useCallback } from "react";
import { AuthStore } from "@/stores";
import { Tokens } from "@/types";
import { LoginFormData } from "@/pages/auth/login/components/login/Card/components";

const useAuthMutations = () => {
  const setTokens = AuthStore((state) => state.setTokens);

  const onSuccess = useCallback(
    ({ access_token, refresh_token }: Tokens) => {
      setTokens({ access_token, refresh_token });
      console.log("Login successful");
    },
    [setTokens],
  );

  const onError = useCallback((error: Error) => {
    console.error("❌ ~ AuthServices.login ~ error", error);
  }, []);

  const localLoginMutation = useMutation<Tokens, Error, LoginFormData>({
    mutationFn: AuthServices.localLogin,
    onSuccess,
    onError,
  });

  const googleAuthMutation = useMutation<Tokens, Error, string>({
    mutationFn: AuthServices.googleAuth,
    onSuccess,
    onError,
  });

  const microsoftAuthMutation = useMutation<Tokens, Error, string>({
    mutationFn: AuthServices.microsoftAuth,
    onSuccess,
    onError,
  });

  return { localLoginMutation, googleAuthMutation, microsoftAuthMutation };
};

export default useAuthMutations;
