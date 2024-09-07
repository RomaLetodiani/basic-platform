import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { loginContentItems } from "../utils";

const LogInContent = () => {
  return (
    <Stack sx={{ flexDirection: "column", alignSelf: "center", gap: 4, maxWidth: 450 }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>{/*<BotuIcon />*/}</Box>
      {loginContentItems.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: "medium" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
};

export default LogInContent;
