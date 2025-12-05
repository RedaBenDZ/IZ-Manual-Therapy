import Section from "@/components/layout/Section";
import ServiceCard from "@/components/features/ServiceCard";
import PackageCard from "@/components/features/PackageCard";
import CTABanner from "@/components/features/CTABanner";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Package, Service } from "@/types";

export const metadata = { title: "Services" };

async function getData() {
  const supabase = createSupabaseServerClient();
  const { data: services } = await supabase.from("services").select("*").eq("active", true).order("sort_order", { ascending: true });
  const { data: packages } = await supabase.from("packages").select("*").eq("active", true).order("sort_order", { ascending: true });
  return {
    services: (services as Service[]) ?? [],
    packages: (packages as Package[]) ?? [],
  };
}

export default async function ServicesPage() {
  const { services, packages } = await getData();

  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80">Personalised, mobile manual therapy tailored to your needs.</p>
      </Section>
      <Section background="muted">
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.length === 0 && <p>No services listed yet.</p>}
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
      {packages.length > 0 && (
        <Section>
          <h2 className="text-3xl font-semibold">Packages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {packages.map((pack) => (
              <PackageCard key={pack.id} pack={pack} />
            ))}
          </div>
        </Section>
      )}
      <Section background="muted">
        <h2 className="text-3xl font-semibold">What to expect</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Book", "Prepare", "Treatment"].map((step) => (
            <div key={step} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-semibold">{step}</p>
              <p className="text-sm text-foreground/80">Guided every step for a calm experience.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold">Who it’s for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/80">
          <li>Active people managing training loads</li>
          <li>Desk-based professionals with tension</li>
          <li>Post-natal recovery and general wellbeing</li>
        </ul>
      </Section>
      <Section>
        <CTABanner />
      </Section>
    </>
  );
}
