import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { useLocation, useNavigate } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ExtensionIcon from "@mui/icons-material/Extension";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

import SupportIcon from "@mui/icons-material/Support";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },

  { text: "Support", icon: <SupportIcon /> },
];

const MenuContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            navigate("./overview", { relative: "path" });
            handleClick();
          }}
        >
          <ListItemButton selected={location.pathname.endsWith("overview")}>
            <ListItemIcon>
              <HomeRoundedIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Project Overview"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItem sx={{ display: "block" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>{/*<StarBorder />*/}</ListItemIcon>
              <ListItemText primary="Users " />
            </ListItemButton>
          </ListItem>
        </Collapse>

        <ListItem
          disablePadding
          sx={{ display: "block", mt: 0.5 }}
          onClick={() => navigate("./chats", { relative: "path" })}
        >
          <ListItemButton selected={location.pathname.endsWith("chats")}>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Chats"} />
          </ListItemButton>
        </ListItem>

        <ListSubheader sx={{ mt: 1, mb: 1 }}>Build</ListSubheader>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => navigate("./knowledge-base", { relative: "path" })}
        >
          <ListItemButton selected={location.pathname.endsWith("knowledge-base")}>
            <ListItemIcon>
              <AutoStoriesIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Knowledge Base"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block", mt: 0.5 }}
          onClick={() => navigate("./dialog-flow", { relative: "path" })}
        >
          <ListItemButton selected={location.pathname.endsWith("dialog-flow")}>
            <ListItemIcon>
              <AccountTreeIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Dialog Flow"} />
          </ListItemButton>
        </ListItem>

        <ListSubheader sx={{ mt: 1, mb: 1 }}>Release </ListSubheader>

        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => navigate("./integrations", { relative: "path" })}
        >
          <ListItemButton selected={location.pathname.endsWith("integrations")}>
            <ListItemIcon>
              <IntegrationInstructionsIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Integrations"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block", mt: 0.5 }}
          onClick={() => navigate("./extensions", { relative: "path" })}
        >
          <ListItemButton selected={location.pathname.endsWith("extensions")}>
            <ListItemIcon>
              <ExtensionIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Extensions"} />
          </ListItemButton>
        </ListItem>
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default MenuContent;
