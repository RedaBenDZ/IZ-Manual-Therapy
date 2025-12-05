import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Booking, Client, MedicalHistory, Service } from "@/types";

interface BookingDetailProps {
  booking: Booking;
  client?: Client;
  medical?: MedicalHistory;
  service?: Service;
}

const BookingDetail = ({ booking, client, medical, service }: BookingDetailProps) => (
  <div className="space-y-4">
    <Card>
      <h3 className="text-xl font-semibold">Booking</h3>
      <p>Status: <Badge status={booking.status} /></p>
      {service && <p>Service: {service.name}</p>}
    </Card>
    {client && (
      <Card>
        <h3 className="text-xl font-semibold">Client</h3>
        <p>{client.name}</p>
        <p>{client.email}</p>
        <p>{client.phone}</p>
      </Card>
    )}
    {medical && (
      <Card>
        <h3 className="text-xl font-semibold">Medical history</h3>
        <p>Conditions: {(medical.conditions ?? []).join(", ") || "None"}</p>
      </Card>
    )}
  </div>
);

export default BookingDetail;
