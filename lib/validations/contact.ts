import { z } from "zod";

const phoneRegex = /^(\+44|0)[0-9]{10,11}$/;

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Enter a valid UK phone number"),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true, { message: "Consent is required" }),
});

export type ContactInput = z.infer<typeof contactSchema>;
