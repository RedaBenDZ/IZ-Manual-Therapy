import Link from "next/link";
import Button from "../ui/Button";

const CTABanner = () => (
  <div className="rounded-xl bg-cta px-6 py-10 text-white shadow-lg">
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h3 className="text-2xl font-semibold">Ready to feel better?</h3>
        <p className="text-white/90">Book your home visit in minutes.</p>
      </div>
      <Button variant="secondary" asChild>
        <Link href="/book">Book Now</Link>
      </Button>
    </div>
  </div>
);

export default CTABanner;
