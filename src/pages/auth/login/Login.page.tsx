import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import { ThemeSwitcherAbsolute } from "@/components";
import { LoginCard, LoginContent } from "./components";

const loginPageSX = [
  { justifyContent: "space-between" },
  (theme: Theme) => ({
    backgroundImage: "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundSize: "cover",
    ...theme.applyStyles("dark", {
      backgroundImage: "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  }),
];

const LoginPage = () => {
  return (
    <Stack direction="column" component="main" sx={loginPageSX}>
      <ThemeSwitcherAbsolute />
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 6, sm: 12 },
          height: { xs: "100%", md: "100dvh" },
          p: 2,
        }}
      >
        <LoginContent />
        <LoginCard />
      </Stack>
    </Stack>
  );
};

export default LoginPage;
