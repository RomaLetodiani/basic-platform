import { useState, useCallback, useRef, ChangeEvent } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { LoadingButton } from "@mui/lab";

import ForgotPassword from "./ForgotPassword.tsx";
import { BotuIcon, GoogleIcon, MicrosoftIcon } from "@/components/custom/icons";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { AuthStore } from "@/stores";
import { AuthServices } from "@/services";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  minHeight: 600,
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: 450,
  },
  ...theme.applyStyles?.("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const LoginCard = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({ email: "", password: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const setTokens = AuthStore((state) => state.setTokens);

  const login = async (body: { email: string; password: string }) => {
    const response = await AuthServices.localLogin(body);
    setTokens(response.data.accessToken);
  };

  const validateForm = useCallback((): boolean => {
    const errors: FormErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  }, [formData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        await login({ email: formData.email, password: formData.password });
        navigate("/", { replace: true });
      } catch (error) {
        // @ts-ignore
        setError(error.response?.data?.detail || "Login failed. Please try again.");
        console.error("Login failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <StyledCard variant="outlined">
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <BotuIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign in
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={!!formErrors.email}
            helperText={formErrors.email}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            inputRef={emailInputRef}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={() => setIsDialogOpen(true)}
              variant="body2"
              sx={{ alignSelf: "baseline" }}
            >
              Forgot your password?
            </Link>
          </Box>
          <TextField
            error={!!formErrors.password}
            helperText={formErrors.password}
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••"
            autoComplete="current-password"
            required
            fullWidth
            inputRef={passwordInputRef}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox name="remember" color="primary" />}
          label="Remember me"
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          loading={isLoading}
        >
          Sign in
        </LoadingButton>
        <Typography sx={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Link href="/signup" variant="body2">
            Sign up
          </Link>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => console.log("Sign in with Google")}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<MicrosoftIcon />}
          onClick={() => console.log("Sign in with Microsoft")}
        >
          Sign in with Microsoft
        </Button>
      </Box>
      <ForgotPassword open={isDialogOpen} handleClose={() => setIsDialogOpen(false)} />
    </StyledCard>
  );
};

export default LoginCard;
