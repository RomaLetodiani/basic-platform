import { Outlet } from "react-router-dom";
import { ChatHeader, ChatList } from "./components";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Suspense } from "react";

const ChatPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <ChatHeader />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        sx={{ height: "calc(100% - 150px)", flexWrap: "wrap", mx: 3 }}
        direction="row"
        useFlexGap
      >
        <ChatList />
        <Paper sx={{ flexGrow: 1 }} variant={"outlined"}>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Paper>
      </Stack>
    </Box>
  );
};

export default ChatPage;
