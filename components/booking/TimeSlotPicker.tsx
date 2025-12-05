import React from "react";
import type { AvailabilitySlot } from "@/types";
import Button from "@/components/ui/Button";

interface TimeSlotPickerProps {
  slots: AvailabilitySlot[];
  selectedDate?: string;
  selectedSlotId?: string;
  onSelectSlot: (id: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ slots, selectedDate, selectedSlotId, onSelectSlot }) => {
  const filtered = selectedDate
    ? slots.filter((slot) => new Date(slot.start_time).toDateString() === selectedDate)
    : [];

  return (
    <div className="flex flex-wrap gap-3">
      {filtered.map((slot) => {
        const start = new Date(slot.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return (
          <Button
            key={slot.id}
            variant={selectedSlotId === slot.id ? "primary" : "secondary"}
            onClick={() => onSelectSlot(slot.id)}
            size="sm"
          >
            {start}
          </Button>
        );
      })}
      {filtered.length === 0 && <p>Select a date to view times.</p>}
    </div>
  );
};

export default TimeSlotPicker;
