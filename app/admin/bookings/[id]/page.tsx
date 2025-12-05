import BookingDetail from "@/components/admin/BookingDetail";
import type { Booking } from "@/types";

export default function BookingDetailPage() {
  const booking: Booking = {
    id: "1",
    client_id: "",
    slot_id: "",
    status: "pending",
  } as Booking;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Booking detail</h1>
      <BookingDetail booking={booking} />
    </div>
  );
}
