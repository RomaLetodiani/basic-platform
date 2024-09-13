import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BotuIcon } from "@/components/custom/icons";
import { StyledCard } from "../shared";
import { LoginFormProvider } from ".";

const LoginCard = () => {
  return (
    <StyledCard variant="outlined">
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <BotuIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign In
      </Typography>
      <LoginFormProvider />
    </StyledCard>
  );
};

export default LoginCard;
