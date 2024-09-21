import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  messageInputFormInitialValues,
  messageInputFormSchema,
  MessageInputFormData,
  MessageInput,
} from ".";

const MessageInputFormProvider = () => {
  const methods = useForm<MessageInputFormData>({
    mode: "onSubmit",
    resolver: zodResolver(messageInputFormSchema),
    defaultValues: messageInputFormInitialValues,
  });

  return (
    <FormProvider {...methods}>
      <MessageInput />
    </FormProvider>
  );
};

export default MessageInputFormProvider;
