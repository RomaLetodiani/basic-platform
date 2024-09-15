import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.input<typeof loginFormSchema>;

export const loginFormInitialValues: LoginFormData = {
  email: "",
  password: "",
  rememberMe: false,
};
