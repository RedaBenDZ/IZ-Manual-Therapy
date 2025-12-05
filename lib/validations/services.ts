import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  duration_minutes: z.number().min(15),
  price_pence: z.number().min(0),
  sort_order: z.number().optional(),
  active: z.boolean().default(true),
});

export const packageSchema = z.object({
  name: z.string().min(2),
  sessions: z.number().min(1),
  price_pence: z.number().min(0),
  savings: z.string().optional(),
  sort_order: z.number().optional(),
  active: z.boolean().default(true),
  services: z.array(z.string()).optional(),
});
