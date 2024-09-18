import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface ChatListItemProps {
  avatar: string;
  primary: string;
  secondary: string;
  id: string;
}

const ChatListItem = ({ avatar, primary, secondary, id }: ChatListItemProps) => (
  <Link to={id}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={primary} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              {secondary.split("—")[0]}
            </Typography>
            {` — ${secondary.split("—")[1]}`}
          </>
        }
      />
    </ListItem>
  </Link>
);

export default ChatListItem;
