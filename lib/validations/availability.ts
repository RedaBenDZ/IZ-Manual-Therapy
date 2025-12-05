import { z } from "zod";

export const slotSchema = z.object({
  start_time: z.string(),
  end_time: z.string(),
  booked: z.boolean().optional(),
});
