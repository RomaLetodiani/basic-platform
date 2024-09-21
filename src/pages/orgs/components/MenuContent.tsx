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

import SupportIcon from "@mui/icons-material/Support";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { useMenuItems } from "../hooks";

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },

  { text: "Support", icon: <SupportIcon /> },
];

// TODO: After going for final design refactor this component to not violate DRY Principle
const MenuContent = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { overview, projects, team } = useMenuItems();

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

        <Link to={projects.path}>
          <ListItem disablePadding sx={{ display: "block", mt: 0.5 }}>
            <ListItemButton selected={location.pathname.includes(projects.path)}>
              <ListItemIcon>
                <QuestionAnswerRoundedIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={projects.title} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={team.path}>
          <ListItem disablePadding sx={{ display: "block", mt: 0.5 }}>
            <ListItemButton selected={location.pathname.includes(team.path)}>
              <ListItemIcon>
                <AutoStoriesIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={team.title} />
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
