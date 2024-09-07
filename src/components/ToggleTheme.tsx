import { ThemeStore } from "@/stores";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

const ToggleTheme = (props: IconButtonProps) => {
  const { theme, toggleTheme } = ThemeStore();
  return (
    <IconButton
      onClick={toggleTheme}
      size="small"
      color="primary"
      aria-label="Theme toggle button"
      {...props}
    >
      {theme === "dark" ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};

export default ToggleTheme;
