import { MouseEvent, useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const ChatViewPage = () => {
  const { chatId } = useParams();
  const [formats, setFormats] = useState(() => ["bold", "italic"]);
  const handleFormat = (_: MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };
  return (
    <Stack direction="column" spacing={1}>
      <OutlinedInput value={chatId}></OutlinedInput>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        size={"small"}
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default ChatViewPage;
