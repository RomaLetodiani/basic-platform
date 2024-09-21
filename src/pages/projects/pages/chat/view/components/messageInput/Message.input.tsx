import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { RHFTextField } from "@/components/RHF";

const MessageInput = () => {
  const handleClick = () => {
    console.log("Send message:");
  };
  return (
    <Box pb={2} px={2}>
      <Card>
        <RHFTextField
          fullWidth
          placeholder="Type something here…"
          aria-label="Message"
          minRows={3}
          maxRows={6}
          multiline
          name="message"
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          mt={2}
          sx={{
            py: 1,
            pr: 1,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Stack direction="row" gap={1}>
            <IconButton>
              <FormatBoldRoundedIcon />
            </IconButton>
            <IconButton>
              <FormatItalicRoundedIcon />
            </IconButton>
            <IconButton>
              <StrikethroughSRoundedIcon />
            </IconButton>
            <IconButton>
              <FormatListBulletedRoundedIcon />
            </IconButton>
          </Stack>
          <Button
            sx={{ alignSelf: "center", borderRadius: "sm" }}
            endIcon={<SendRoundedIcon />}
            onClick={handleClick}
          >
            Send
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default MessageInput;
