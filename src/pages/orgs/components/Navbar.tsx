import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import MuiToolbar from "@mui/material/Toolbar";
import { tabsClasses } from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { MenuButton } from "@/components";
import { SideMenuMobile } from ".";
import { DashboardIcon } from "@/components/custom/icons";
import { useDrawer } from "@/hooks";

const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "12px",
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: "8px",
    p: "8px",
    pb: 0,
  },
});

const Navbar = () => {
  const { open, closeDrawer, openDrawer } = useDrawer();

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "auto", md: "none" },
        boxShadow: 0,
        bgcolor: "background.paper",
        backgroundImage: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
          }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
            <DashboardIcon />
            <Typography variant="h4" component="h1" sx={{ color: "text.primary" }}>
              Dashboard
            </Typography>
          </Stack>
          <MenuButton aria-label="menu" onClick={openDrawer}>
            <MenuRoundedIcon />
          </MenuButton>
          <SideMenuMobile open={open} closeDrawer={closeDrawer} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
