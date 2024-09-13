import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { useAnimateFormsHook } from "../hooks";
import LoginCard from "./login/LoginCard";
import OrgsCard from "./orgs/OrgsCard";

const Cards = () => {
  const { showLoginCard, showOrgsCard } = useAnimateFormsHook();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "450px" },
        minHeight: "600px",
        alignSelf: "center",
        position: "relative",
      }}
    >
      <Collapse
        in={showLoginCard}
        timeout={300}
        sx={{
          position: "absolute",
          width: "100%",
        }}
      >
        <LoginCard />
      </Collapse>
      <Collapse in={showOrgsCard} timeout={300} style={{ position: "absolute", width: "100%" }}>
        <OrgsCard />
      </Collapse>
    </Box>
  );
};

export default Cards;
