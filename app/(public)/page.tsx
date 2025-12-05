import Hero from "@/components/features/Hero";
import Section from "@/components/layout/Section";
import ServiceCard from "@/components/features/ServiceCard";
import PackageCard from "@/components/features/PackageCard";
import Testimonial from "@/components/features/Testimonial";
import GoogleMap from "@/components/features/GoogleMap";
import CTABanner from "@/components/features/CTABanner";
import Link from "next/link";
import Card from "@/components/ui/Card";

const services = [
  { id: "1", name: "Sports Massage", description: "Targeted treatment for athletes and active individuals.", duration_minutes: 60, price_pence: 7000 },
  { id: "2", name: "Deep Tissue", description: "Relieve muscular tension and improve mobility.", duration_minutes: 60, price_pence: 6500 },
  { id: "3", name: "Relaxation Massage", description: "Unwind with a calming full-body treatment.", duration_minutes: 60, price_pence: 6000 },
];

const packages = [
  { id: "p1", name: "Performance Pack", sessions: 5, price_pence: 30000, savings: "Save £50" },
];

const testimonials = [
  { quote: "Izzy helped me get back on track after my marathon.", name: "James, runner" },
  { quote: "Professional, knowledgeable, and kind.", name: "Sarah, teacher" },
  { quote: "Home visits make it so convenient.", name: "Michael, new parent" },
];

const serviceAreas = ["Bromley", "Beckenham", "Penge", "Shortlands", "Chislehurst", "South-East London"];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IZ Manual Therapy",
    description: "Home-visit manual therapy and massage treatments across South-East London.",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://izmanualtherapy.co.uk",
    telephone: "07700900000",
    areaServed: serviceAreas,
  };

  return (
    <>
      <Hero />
      <Section background="muted">
        <div className="grid gap-6 md:grid-cols-3">
          {["Home visits", "Sports background", "Studying osteopathy"].map((item) => (
            <Card key={item}>
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-foreground/80">Tailored care delivered wherever you are.</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="h-64 rounded-lg bg-accent-soft/60" aria-label="About image placeholder" />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Meet Izzy</h2>
            <p className="text-lg text-foreground/80">
              Ex-athlete and manual therapist studying osteopathy, specialising in restorative treatment plans that fit your life.
            </p>
            <Link href="/about" className="font-semibold text-cta underline">
              Learn more about Izzy
            </Link>
          </div>
        </div>
      </Section>
      <Section background="muted">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Services</h2>
          <Link href="/services" className="text-cta underline">
            View all services
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service as any} />
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Service area</h2>
            <p className="text-foreground/80">Based in Bromley and covering surrounding South-East London areas.</p>
            <ul className="flex flex-wrap gap-3 text-sm">
              {serviceAreas.map((area) => (
                <li key={area} className="rounded-full bg-accent-soft px-3 py-1">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <GoogleMap />
        </div>
      </Section>
      <Section background="muted">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Testimonial key={item.quote} quote={item.quote} name={item.name} context={item.name} />
          ))}
        </div>
      </Section>
      <Section>
        <CTABanner />
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
