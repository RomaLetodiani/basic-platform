import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { useAuthMutations } from "@/server/mutation";

import { RHFCheckbox, RHFTextField } from "@/components/RHF";
import { GoogleIcon, MicrosoftIcon } from "@/components/custom/icons";

import { ForgotPassword, type LoginFormData } from ".";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMsal } from "@azure/msal-react";
import { useGoogleLogin } from "@react-oauth/google";
import { msalLoginRequest } from "@/auth.config";

const LoginForm = () => {
  const [isForgotPasswordDialogOpen, setIsForgotPasswordDialogOpen] = useState(false);
  const closeForgotPasswordDialog = () => setIsForgotPasswordDialogOpen(false);
  const openForgotPasswordDialog = () => setIsForgotPasswordDialogOpen(true);

  const { localLoginMutation, googleAuthMutation, microsoftAuthMutation } = useAuthMutations();

  const { instance } = useMsal();

  const { handleSubmit } = useFormContext<LoginFormData>();

  const onSubmit = handleSubmit((data: LoginFormData) => {
    localLoginMutation.mutate(data);
  });

  const handleMicrosoftLogin = async () => {
    const response = await instance.loginPopup(msalLoginRequest);
    microsoftAuthMutation.mutate(response.accessToken);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => googleAuthMutation.mutate(response.access_token),
  });

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      {localLoginMutation.isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          An Error Occurred During Login
        </Alert>
      )}

      <Stack gap={1}>
        <RHFTextField
          fullWidth
          name="email"
          id="email"
          placeholder="your@email.com"
          autoCapitalize="email"
          autoComplete="email"
          label="Email"
          required
          variant="outlined"
        />
        <RHFTextField
          fullWidth
          name="password"
          id="password"
          placeholder="••••••"
          variant="outlined"
          autoComplete="current-password"
          label={
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Link
                component="button"
                type="button"
                onClick={openForgotPasswordDialog}
                variant="body2"
                sx={{ alignSelf: "baseline" }}
              >
                Forgot your password?
              </Link>
            </Box>
          }
          type="password"
          required
        />
        <RHFCheckbox id="rememberMe" name="rememberMe" label="Remember me" />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        loading={localLoginMutation.isPending}
      >
        Sign in
      </LoadingButton>
      <Typography sx={{ textAlign: "center" }}>
        Don't have an account? <Link variant="body2">Sign up</Link>
      </Typography>

      <Divider>
        <Typography variant="subtitle2" fontWeight="800" color="textSecondary">
          or
        </Typography>
      </Divider>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => handleGoogleLogin()}
        >
          Sign in with Google&emsp;
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<MicrosoftIcon />}
          onClick={() => handleMicrosoftLogin()}
        >
          Sign in with Microsoft
        </Button>
      </Box>
      <ForgotPassword open={isForgotPasswordDialogOpen} handleClose={closeForgotPasswordDialog} />
    </Box>
  );
};

export default LoginForm;
