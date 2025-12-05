import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import type { Booking, Client, Service } from "@/types";

interface BookingRow extends Booking {
  client?: Client;
  service?: Service;
}

const BookingsList = ({ bookings }: { bookings: BookingRow[] }) => (
  <Card>
    <div className="grid grid-cols-6 gap-2 text-sm font-semibold">
      <span>Date</span>
      <span>Time</span>
      <span>Client</span>
      <span>Service</span>
      <span>Status</span>
      <span>Actions</span>
    </div>
    <div className="mt-3 space-y-2 text-sm">
      {bookings.map((booking) => {
        const date = new Date(booking.created_at ?? Date.now());
        return (
          <div key={booking.id} className="grid grid-cols-6 items-center gap-2 rounded bg-accent-soft/40 px-2 py-1">
            <span>{date.toLocaleDateString()}</span>
            <span>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            <span>{booking.client?.name ?? "Client"}</span>
            <span>{booking.service?.name ?? "Service"}</span>
            <Badge status={booking.status} />
            <Link className="text-cta underline" href={`/admin/bookings/${booking.id}`}>
              View
            </Link>
          </div>
        );
      })}
    </div>
  </Card>
);

export default BookingsList;
