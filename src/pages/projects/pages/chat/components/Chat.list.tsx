import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import { ChatListItem } from ".";
import { chatData } from "../utils/dummy.data";
import { Fragment } from "react";

const ChatList = () => {
  return (
    <Paper
      variant={"outlined"}
      sx={{ width: "100%", maxWidth: 360, height: "100%", overflowY: "auto" }}
    >
      <List>
        {chatData.map((section, index) => (
          <Fragment key={`${section.section}-${index}`}>
            <ListSubheader>{section.section}</ListSubheader>
            {section.chats.map((chat) => (
              <Fragment key={chat.id}>
                <ChatListItem
                  id={chat.id}
                  avatar={chat.avatar}
                  primary={chat.primary}
                  secondary={chat.secondary}
                />
                <Divider />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ChatList;
