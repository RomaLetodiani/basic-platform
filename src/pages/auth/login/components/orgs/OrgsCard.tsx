import { OrgStore } from "@/stores";
import { useOrgsQuery } from "@/server/query";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "../shared";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const OrgsCard = () => {
  const setLastOrgId = OrgStore((state) => state.setLastOrgId);
  const navigate = useNavigate();
  const { data: orgs, isPending, isError } = useOrgsQuery();

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const handleOrgClick = async (orgId: string) => {
    await setLastOrgId(orgId).then(() => {
      navigate(`orgs/${orgId}/overview`);
    });
  };

  return (
    <StyledCard>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Select Organization
      </Typography>
      <List sx={{ flexGrow: 1, overflow: "auto" }}>
        {orgs &&
          orgs.map((org) => (
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
          ))}
      </List>
      <Divider sx={{ mx: -1 }} />
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
    </StyledCard>
  );
};

export default OrgsCard;
