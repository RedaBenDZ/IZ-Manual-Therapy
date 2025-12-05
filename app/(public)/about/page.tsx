import Section from "@/components/layout/Section";
import CTABanner from "@/components/features/CTABanner";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold">About IZ Manual Therapy</h1>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80">
          IZ Manual Therapy is led by Izzy, an ex-athlete and manual therapist studying osteopathy. Expect empathetic, evidence-based care that meets you where you are.
        </p>
      </Section>
      <Section background="muted">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="h-72 rounded-lg bg-accent-soft/60" aria-label="Story image placeholder" />
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Story</h2>
            <p className="text-foreground/80">
              Years of competing in sport shaped Izzy’s approach: practical, goal-led, and grounded in anatomy. Ongoing osteopathy study deepens assessment and treatment techniques.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold">Why home visits</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["No travel stress", "Personalised setup", "Consistent routine"].map((item) => (
            <div key={item} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-semibold">{item}</p>
              <p className="text-sm text-foreground/80">Care on your schedule with the equipment brought to you.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section background="muted">
        <h2 className="text-3xl font-semibold">Qualifications</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/80">
          <li>Level 5 Sports & Remedial Massage</li>
          <li>First Aid certified</li>
          <li>Osteopathy student</li>
        </ul>
      </Section>
      <Section>
        <CTABanner />
      </Section>
    </>
  );
}
