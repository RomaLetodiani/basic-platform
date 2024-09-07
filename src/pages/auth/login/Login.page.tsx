import Stack from "@mui/material/Stack";
import { ToggleTheme } from "@/components";
import { LoginCard, LoginContent } from "./components";

const LoginPage = () => {
  return (
    <Stack
      direction="column"
      component="main"
      sx={[
        { justifyContent: "space-between" },
        (theme) => ({
          backgroundImage:
            "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
          backgroundSize: "cover",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
          }),
        }),
      ]}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          position: { sm: "static", md: "fixed" },
          width: "100%",
          p: { xs: 2, sm: 4 },
        }}
      >
        <ToggleTheme data-screenshot="toggle-mode" />
      </Stack>
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
