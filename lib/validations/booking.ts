import { z } from "zod";
import { clientSchema } from "./client";

const phoneRegex = /^(\+44|0)[0-9]{10,11}$/;
const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;

export const medicalHistorySchema = z.object({
  conditions: z.array(z.string()).default([]),
  medications: z.string().optional(),
  allergies: z.string().optional(),
  injuries: z.string().optional(),
});

export const bookingSchema = z.object({
  serviceId: z.string().optional(),
  packageId: z.string().optional(),
  slotId: z.string(),
  client: clientSchema,
  medicalHistory: medicalHistorySchema,
  consent: z.boolean(),
  privacyConsent: z.boolean(),
  notes: z.string().optional(),
}).refine((data) => data.serviceId || data.packageId, {
  message: "Select a service or package",
  path: ["serviceId"],
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type MedicalHistoryInput = z.infer<typeof medicalHistorySchema>;
export const returningClientSchema = z.object({
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Enter a valid UK phone number").optional(),
  postcode: z.string().regex(postcodeRegex, "Enter a valid UK postcode").optional(),
});
