import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const RootSuspense = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100dvh",
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default RootSuspense;
