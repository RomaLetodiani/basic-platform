import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardAlert, MenuContent } from ".";
import { AuthStore } from "@/stores";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

const SideMenu = () => {
  const user = AuthStore((state) => state.user);
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <MenuContent />
      <CardAlert />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
        height={70}
      >
        <Avatar
          sizes="small"
          alt={user?.firstName.toUpperCase()}
          src="/static/images/avatar/4.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              width: "100%",
              lineHeight: "16px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {user?.email}
          </Typography>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default SideMenu;
