import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";

import { Search } from "@/components";

const ChatHeader = () => {
  return (
    <Stack direction={"row"} alignItems="center" sx={{ height: 80, py: 1.5, px: 3 }}>
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <IconButton>
          <EditNoteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ChatHeader;
