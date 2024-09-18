import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { Link, useLocation } from "react-router-dom";
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
import { useMenuItems } from "../hooks";

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },

  { text: "Support", icon: <SupportIcon /> },
];

// TODO: After going for final design refactor this component to not violate DRY Principle
const MenuContent = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { chats, dialogFlow, extensions, integrations, knowledgeBase, overview } = useMenuItems();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        <Link to={overview.path}>
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleClick}>
            <ListItemButton selected={pathname.endsWith(overview.path)}>
              <ListItemIcon>
                <HomeRoundedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={overview.title} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </Link>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItem sx={{ display: "block" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>{/*<StarBorder />*/}</ListItemIcon>
              <ListItemText primary="Users " />
            </ListItemButton>
          </ListItem>
        </Collapse>

        <Link to={chats.path}>
          <ListItem disablePadding sx={{ display: "block", mt: 0.5 }}>
            <ListItemButton selected={location.pathname.includes(chats.path)}>
              <ListItemIcon>
                <QuestionAnswerRoundedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={chats.title} />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListSubheader sx={{ mt: 1, mb: 1 }}>Build</ListSubheader>
        <Link to={knowledgeBase.path}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton selected={location.pathname.includes(knowledgeBase.path)}>
              <ListItemIcon>
                <AutoStoriesIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={knowledgeBase.title} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={dialogFlow.path}>
          <ListItem disablePadding sx={{ display: "block", mt: 0.5 }}>
            <ListItemButton selected={location.pathname.includes(dialogFlow.path)}>
              <ListItemIcon>
                <AccountTreeIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={dialogFlow.title} />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListSubheader sx={{ mt: 1, mb: 1 }}>Release </ListSubheader>
        <Link to={integrations.path}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton selected={location.pathname.includes(integrations.path)}>
              <ListItemIcon>
                <IntegrationInstructionsIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={integrations.title} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={extensions.path}>
          <ListItem disablePadding sx={{ display: "block", mt: 0.5 }}>
            <ListItemButton selected={location.pathname.includes(extensions.path)}>
              <ListItemIcon>
                <ExtensionIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={extensions.title} />
            </ListItemButton>
          </ListItem>
        </Link>
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
