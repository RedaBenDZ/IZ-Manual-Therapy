"use client";

import { useEffect, useMemo, useState } from "react";
import Section from "@/components/layout/Section";
import BookingSteps from "@/components/booking/BookingSteps";
import ServiceSelector from "@/components/booking/ServiceSelector";
import DatePicker from "@/components/booking/DatePicker";
import TimeSlotPicker from "@/components/booking/TimeSlotPicker";
import ClientForm from "@/components/booking/ClientForm";
import MedicalHistoryForm from "@/components/booking/MedicalHistoryForm";
import ConsentForm from "@/components/booking/ConsentForm";
import BookingSummary from "@/components/booking/BookingSummary";
import Button from "@/components/ui/Button";
import { useBookingFlow } from "@/hooks/useBookingFlow";
import type { AvailabilitySlot, Package, Service } from "@/types";
import { useToast } from "@/hooks/useToast";

export default function BookPage() {
  const {
    step,
    serviceId,
    packageId,
    slotId,
    client,
    medical,
    consent,
    privacyConsent,
    setServiceId,
    setPackageId,
    setSlotId,
    setConsent,
    setPrivacyConsent,
    updateClient,
    updateMedical,
    nextStep,
    previousStep,
    isValid,
  } = useBookingFlow();
  const [services, setServices] = useState<Service[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [slots, setSlots] = useState<AvailabilitySlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const { addToast } = useToast();

  useEffect(() => {
    const load = async () => {
      const [servicesRes, packagesRes, availabilityRes] = await Promise.all([
        fetch("/api/services"),
        fetch("/api/packages"),
        fetch("/api/availability"),
      ]);
      setServices((await servicesRes.json()).data ?? []);
      setPackages((await packagesRes.json()).data ?? []);
      setSlots((await availabilityRes.json()).data ?? []);
    };
    load();
  }, []);

  const selectedService = useMemo(() => services.find((item) => item.id === serviceId), [services, serviceId]);
  const selectedPackage = useMemo(() => packages.find((item) => item.id === packageId), [packages, packageId]);
  const selectedSlot = useMemo(() => slots.find((item) => item.id === slotId), [slots, slotId]);

  const submitBooking = async () => {
    const payload = {
      serviceId,
      packageId,
      slotId,
      client,
      medicalHistory: medical,
      consent,
      privacyConsent,
    };
    const res = await fetch("/api/booking/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (res.ok) {
      if (json.url) {
        window.location.href = json.url;
      }
    } else {
      addToast({ title: "Unable to book", description: json.error ?? "Please try again", variant: "error" });
    }
  };

  return (
    <Section>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase text-cta">Book online</p>
            <h1 className="text-3xl font-bold">Schedule your home visit</h1>
          </div>
          <BookingSteps currentStep={step} />
        </div>

        {step === 0 && (
          <ServiceSelector
            services={services}
            packages={packages}
            selectedServiceId={serviceId}
            selectedPackageId={packageId}
            onSelectService={(id) => {
              setServiceId(id);
              setPackageId(undefined);
              nextStep();
            }}
            onSelectPackage={(id) => {
              setPackageId(id);
              setServiceId(undefined);
              nextStep();
            }}
          />
        )}

        {step === 1 && (
          <div className="space-y-4">
            <DatePicker slots={slots} selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            <TimeSlotPicker slots={slots} selectedDate={selectedDate} selectedSlotId={slotId} onSelectSlot={setSlotId} />
          </div>
        )}

        {step === 2 && <ClientForm client={client} onChange={updateClient} />}

        {step === 3 && <MedicalHistoryForm history={medical} onChange={updateMedical} />}

        {step === 4 && (
          <div className="space-y-4">
            <ConsentForm
              consent={consent}
              privacyConsent={privacyConsent}
              onChange={(field, value) => {
                if (field === "consent") setConsent(value);
                if (field === "privacyConsent") setPrivacyConsent(value);
              }}
            />
            <BookingSummary
              service={selectedService}
              pack={selectedPackage}
              slot={selectedSlot}
              client={client}
              medical={medical}
            />
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="secondary" onClick={previousStep} disabled={step === 0}>
            Back
          </Button>
          {step < 4 ? (
            <Button onClick={nextStep} disabled={step === 1 && !slotId}>
              Continue
            </Button>
          ) : (
            <Button onClick={submitBooking} disabled={!isValid}>
              Proceed to payment
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
