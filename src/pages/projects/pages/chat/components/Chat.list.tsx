import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import { ChatListItem } from ".";
import { chatData } from "../utils/dummy.data";

const ChatList = () => {
  return (
    <Paper
      variant={"outlined"}
      sx={{ width: "100%", maxWidth: 360, height: "100%", overflowY: "auto" }}
    >
      <List>
        {chatData.map((section) => (
          <div key={section.section}>
            <ListSubheader>{section.section}</ListSubheader>
            {section.chats.map((chat) => (
              <div key={chat.id}>
                <ChatListItem
                  avatar={chat.avatar}
                  primary={chat.primary}
                  secondary={chat.secondary}
                />
                <Divider />
              </div>
            ))}
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default ChatList;
