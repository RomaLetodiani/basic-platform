import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Loading = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <CircularProgress />
    </Stack>
  );
};

export default Loading;
