import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">IZ Manual Therapy</h3>
            <p className="mt-2 text-sm text-foreground/80">Home-visit manual therapy in South-East London.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navigate</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Phone: 07700 900000</li>
              <li>Email: hello@izmanualtherapy.co.uk</li>
              <li>Areas: Bromley, Beckenham, SE London</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/privacy-policy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/gdpr">GDPR</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-foreground/70">© {year} IZ Manual Therapy. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
