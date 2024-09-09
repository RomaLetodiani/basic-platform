import { ToggleTheme } from "@/components";
import Box from "@mui/material/Box";

const ThemeSwitcherAbsolute = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        p: { xs: 2, md: 4 },
      }}
    >
      <ToggleTheme data-screenshot="toggle-mode" />
    </Box>
  );
};

export default ThemeSwitcherAbsolute;
