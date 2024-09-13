import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import { ThemeSwitcherAbsolute } from "@/components";
import { Content, Cards } from "./components";

const loginPageSX = [
  (theme: Theme) => ({
    minHeight: { xs: "100%", sm: "100dvh" },
    paddingBlock: 10,
    paddingInline: { xs: 2, sm: 4 },
    backgroundImage: "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundSize: "cover",
    ...theme.applyStyles("dark", {
      backgroundImage: "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  }),
];

const LoginPage = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent="center"
      alignItems={{ xs: "unset", md: "center" }}
      gap={{ xs: 8, sm: 12 }}
      component="main"
      sx={loginPageSX}
    >
      <ThemeSwitcherAbsolute />

      <Content />
      <Cards />
    </Stack>
  );
};

export default LoginPage;
