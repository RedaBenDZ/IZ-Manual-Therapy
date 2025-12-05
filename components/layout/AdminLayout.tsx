import Link from "next/link";
import React from "react";
import NotificationBell from "@/components/admin/NotificationBell";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/availability", label: "Availability" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/settings", label: "Settings" },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-foreground/10 bg-white px-6 py-4 shadow-sm">
        <Link href="/admin" className="text-lg font-semibold">
          Admin
        </Link>
        <NotificationBell />
      </header>
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8">
        <aside className="hidden w-56 space-y-3 md:block">
          {adminLinks.map((link) => (
            <Link key={link.href} className="block rounded px-3 py-2 hover:bg-accent/50" href={link.href}>
              {link.label}
            </Link>
          ))}
        </aside>
        <main className="flex-1 rounded-lg border border-foreground/10 bg-white p-6 shadow-sm">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
