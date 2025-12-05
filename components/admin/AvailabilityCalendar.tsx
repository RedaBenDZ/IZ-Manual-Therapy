import Card from "@/components/ui/Card";
import type { AvailabilitySlot } from "@/types";

const AvailabilityCalendar = ({ slots }: { slots: AvailabilitySlot[] }) => (
  <Card>
    <h3 className="text-xl font-semibold">Availability</h3>
    <ul className="mt-3 space-y-2 text-sm">
      {slots.map((slot) => (
        <li key={slot.id} className="rounded bg-accent-soft/40 px-3 py-2">
          {new Date(slot.start_time).toLocaleString()} - {slot.booked ? "Booked" : "Available"}
        </li>
      ))}
    </ul>
  </Card>
);

export default AvailabilityCalendar;
