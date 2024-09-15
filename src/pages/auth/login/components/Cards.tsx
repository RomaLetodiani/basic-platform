import Box from "@mui/material/Box";
import { OrgsCard } from "./orgs";
import { LoginCard } from "./login";
import { useAnimateFormsHook } from "../hooks";
import { Grow } from "@mui/material";

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
      <Grow
        in={showLoginCard}
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <div>
          <LoginCard />
        </div>
      </Grow>
      <Grow
        in={showOrgsCard}
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <div>
          <OrgsCard />
        </div>
      </Grow>
    </Box>
  );
};

export default Cards;
