import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";
import { Navbar, SideMenu } from "./components";

const ProjectLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100dvh" }}>
      <SideMenu />
      <Navbar />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: "auto",
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",

            mt: { xs: 8, md: 0 },
          }}
          height={"100%"}
        >
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectLayout;
