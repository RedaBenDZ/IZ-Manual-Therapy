"use client";

import { useMemo, useState } from "react";
import { bookingSchema, type BookingInput } from "@/lib/validations/booking";
import type { AvailabilitySlot, Client, MedicalHistory } from "@/types";

export const useBookingFlow = () => {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | undefined>();
  const [packageId, setPackageId] = useState<string | undefined>();
  const [slotId, setSlotId] = useState<string | undefined>();
  const [client, setClient] = useState<Partial<Client>>({});
  const [medical, setMedical] = useState<Partial<MedicalHistory>>({});
  const [consent, setConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const data: BookingInput = {
    serviceId,
    packageId,
    slotId: slotId ?? "",
    client: {
      email: client.email ?? "",
      name: client.name ?? "",
      phone: client.phone ?? "",
      address: client.address ?? "",
      postcode: client.postcode ?? "",
    },
    medicalHistory: {
      conditions: medical.conditions ?? [],
      medications: medical.medications,
      allergies: medical.allergies,
      injuries: medical.injuries,
    },
    consent,
    privacyConsent,
    notes: undefined,
  };

  const isValid = useMemo(() => {
    const result = bookingSchema.safeParse(data);
    return result.success;
  }, [data]);

  const updateClient = (field: keyof Client, value: string) => setClient((prev) => ({ ...prev, [field]: value }));
  const updateMedical = (field: keyof MedicalHistory, value: string | string[]) => setMedical((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const previousStep = () => setStep((s) => Math.max(s - 1, 0));

  return {
    step,
    data,
    serviceId,
    packageId,
    slotId,
    client,
    medical,
    consent,
    privacyConsent,
    isValid,
    setServiceId,
    setPackageId,
    setSlotId,
    setConsent,
    setPrivacyConsent,
    updateClient,
    updateMedical,
    nextStep,
    previousStep,
  };
};
