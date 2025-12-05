import Link from "next/link";
import Button from "../ui/Button";
import Section from "../layout/Section";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCallCta?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = "Expert Manual Therapy at Your Door",
  subtitle = "Targeted home-visit treatments for pain relief and performance.",
  showCallCta = true,
}) => {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wide text-cta">South-East London</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="text-lg text-foreground/80">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            {showCallCta && (
              <Button variant="secondary" asChild>
                <Link href="tel:07700900000">Call to discuss</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="h-64 rounded-lg bg-accent-soft/60" aria-label="Hero image placeholder" />
      </div>
    </Section>
  );
};

export default Hero;
