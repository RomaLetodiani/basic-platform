import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";
import { Navbar, SideMenu } from "./components";
import { Suspense } from "react";

const OrgLayout = () => {
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
            px: 5,
            py: 2,
            mt: { xs: 8, md: 0 },
          }}
          height={"100%"}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Stack>
      </Box>
    </Box>
  );
};

export default OrgLayout;
