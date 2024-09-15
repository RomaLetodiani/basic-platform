import z from "zod";

export default z
  .object({
    VITE_CONVO_API_BASE_URL: z.string().min(1),
    VITE_PLATFORM_API_BASE_URL: z.string().min(1),
    VITE_MSAL_CLIENT_ID: z.string().min(1),
    VITE_GOOGLE_CLIENT_ID: z.string().min(1),
  })
  .parse(import.meta.env);
