import Section from "@/components/layout/Section";
import ContactForm from "@/components/features/ContactForm";
import FAQAccordion from "@/components/features/FAQAccordion";

export const metadata = { title: "Contact" };

const faqItems = [
  { question: "Do you travel outside Bromley?", answer: "Yes, within South-East London by agreement." },
  { question: "What should I prepare?", answer: "A quiet space for a treatment table and fresh towels." },
  { question: "How do payments work?", answer: "Bookings are confirmed via Stripe checkout." },
];

export default function ContactPage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80">Share your goals and we’ll organise the right visit for you.</p>
      </Section>
      <Section background="muted">
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm />
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-foreground/80">Phone: 07700 900000</p>
              <p className="text-foreground/80">Email: hello@izmanualtherapy.co.uk</p>
              <p className="text-foreground/80">Service area: South-East London</p>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </Section>
    </>
  );
}
