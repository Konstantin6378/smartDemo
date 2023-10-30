
import { z } from "zod";

export const signUpSchma = z
  .object({
    numberPhone: z.string(), 
  })

  export type TSingUpSchema = z.infer<typeof signUpSchma>;