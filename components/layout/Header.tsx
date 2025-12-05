"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          IZ Manual Therapy
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-cta ${pathname === link.href ? "text-cta" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </nav>
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-foreground/10 bg-white px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded px-2 py-2 text-sm font-medium hover:bg-accent/40 ${pathname === link.href ? "text-cta" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full" onClick={() => setOpen(false)} asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
