import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const CardBottom = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <AddRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add Organization" secondary="Create new organization" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default CardBottom;
