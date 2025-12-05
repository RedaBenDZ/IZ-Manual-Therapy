import BookingsList from "@/components/admin/BookingsList";
import Card from "@/components/ui/Card";
import type { Booking } from "@/types";

export default function AdminBookingsPage() {
  const bookings: Booking[] = [];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bookings</h1>
      <Card>
        <p className="text-sm text-foreground/80">Filter by date range, status, or search client.</p>
      </Card>
      <BookingsList bookings={bookings as any} />
    </div>
  );
}
