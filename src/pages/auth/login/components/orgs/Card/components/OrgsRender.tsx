import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CircularProgress from "@mui/material/CircularProgress";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

import { useOrgsQuery } from "@/server/query";
import { useOrgClick } from "../hooks";

const OrgsRender = () => {
  const { data, isPending, isError } = useOrgsQuery();
  const orgs = data;
  const handleOrgClick = useOrgClick();

  if (!isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="info">Error While Getting Organizations</Alert>;
  }

  if (!orgs) {
    return <Alert severity="info">No Organizations Found</Alert>;
  }

  return orgs.map((org) => (
    <ListItem key={org.id} disablePadding>
      <ListItemButton onClick={() => handleOrgClick(org.id)}>
        <ListItemAvatar>
          <Avatar alt={org.name}>
            <CorporateFareIcon sx={{ fontSize: "1rem" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={org.name} secondary={org.id} />
      </ListItemButton>
    </ListItem>
  ));
};

export default OrgsRender;
