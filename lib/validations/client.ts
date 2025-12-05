import { z } from "zod";

const phoneRegex = /^(\+44|0)[0-9]{10,11}$/;
const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;

export const clientSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  phone: z.string().regex(phoneRegex, "Enter a valid UK phone number"),
  address: z.string().min(5),
  postcode: z.string().regex(postcodeRegex, "Enter a valid UK postcode"),
});

export type ClientInput = z.infer<typeof clientSchema>;
