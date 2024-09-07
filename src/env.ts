import z from "zod";

export default z
  .object({
    CONVO_API_BASE_URL: z.string().min(1),
    PLATFORM_API_BASE_URL: z.string().min(1),
  })
  .parse(import.meta.env);
