import Link from "next/link";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";

export const metadata = { title: "Booking confirmed" };

export default function BookingSuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  return (
    <Section>
      <Card className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Booking confirmed</h1>
        <p className="mt-2 text-foreground/80">Thank you for booking. A confirmation email has been sent.</p>
        {searchParams.session_id && (
          <p className="mt-2 text-sm text-foreground/70">Session reference: {searchParams.session_id}</p>
        )}
        <div className="mt-6">
          <Link href="/" className="font-semibold text-cta underline">
            Back to home
          </Link>
        </div>
      </Card>
    </Section>
  );
}
