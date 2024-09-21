import { z } from "zod";

export const messageInputFormSchema = z.object({
  message: z.string().min(1),
});

export type MessageInputFormData = z.input<typeof messageInputFormSchema>;

export const messageInputFormInitialValues: MessageInputFormData = {
  message: "",
};
