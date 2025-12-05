import AvailabilityCalendar from "@/components/admin/AvailabilityCalendar";
import SlotForm from "@/components/admin/SlotForm";
import Card from "@/components/ui/Card";
import type { AvailabilitySlot } from "@/types";

export default function AvailabilityPage() {
  const slots: AvailabilitySlot[] = [];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Availability</h1>
      <Card>
        <SlotForm onSubmit={() => {}} />
      </Card>
      <AvailabilityCalendar slots={slots} />
    </div>
  );
}
