import Card from "@/components/ui/Card";
import type { AvailabilitySlot, Client, MedicalHistory, Package, Service } from "@/types";

interface BookingSummaryProps {
  service?: Service;
  pack?: Package;
  slot?: AvailabilitySlot;
  client?: Partial<Client>;
  medical?: Partial<MedicalHistory>;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ service, pack, slot, client, medical }) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold">Review</h3>
      <div className="mt-4 space-y-2 text-sm">
        {service && <p>Service: {service.name}</p>}
        {pack && <p>Package: {pack.name}</p>}
        {slot && <p>Time: {new Date(slot.start_time).toLocaleString()}</p>}
        {client && (
          <div className="space-y-1">
            <p className="font-medium">Client</p>
            <p>{client.name}</p>
            <p>{client.email}</p>
            <p>{client.phone}</p>
            <p>{client.address}</p>
            <p>{client.postcode}</p>
          </div>
        )}
        {medical && (
          <div className="space-y-1">
            <p className="font-medium">Medical notes</p>
            <p>Conditions: {(medical.conditions ?? []).join(", ") || "None"}</p>
            {medical.medications && <p>Medications: {medical.medications}</p>}
            {medical.allergies && <p>Allergies: {medical.allergies}</p>}
            {medical.injuries && <p>Injuries: {medical.injuries}</p>}
          </div>
        )}
      </div>
    </Card>
  );
};

export default BookingSummary;
