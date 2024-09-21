import { Stack } from "@mui/material";
import { MessageInputFormProvider } from "./components/messageInput";
// import { useParams } from "react-router-dom";

const ChatViewPage = () => {
  // const { chatId } = useParams();
  return (
    <Stack direction="column" spacing={1} height="100%">
      <Stack flex={1}></Stack>

      <MessageInputFormProvider />
    </Stack>
  );
};

export default ChatViewPage;
