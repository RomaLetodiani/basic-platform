import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { OrgsCardBottom, OrgsRender } from "./components";
import { StyledCard } from "../../shared";

const OrgsCard = () => {
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
        <OrgsRender />
      </List>
      <Divider sx={{ mx: -1 }} />
      <OrgsCardBottom />
    </StyledCard>
  );
};

export default OrgsCard;
