import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().email(),
    password:z.string().min(6).max(30)
  })

  export const registerSchema = z.object({
    username: z.string().trim().min(3).max(30),
    email: z.string().trim().email(),
    password:z.string().min(6).max(30)
  })