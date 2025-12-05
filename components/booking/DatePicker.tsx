import React from "react";
import type { AvailabilitySlot } from "@/types";
import Button from "@/components/ui/Button";

interface DatePickerProps {
  slots: AvailabilitySlot[];
  selectedDate?: string;
  onSelectDate: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ slots, selectedDate, onSelectDate }) => {
  const dates = Array.from(
    new Set(
      slots.map((slot) => new Date(slot.start_time).toDateString()),
    ),
  );

  return (
    <div className="flex flex-wrap gap-3">
      {dates.map((date) => (
        <Button
          key={date}
          variant={selectedDate === date ? "primary" : "secondary"}
          onClick={() => onSelectDate(date)}
          size="sm"
        >
          {date}
        </Button>
      ))}
      {dates.length === 0 && <p>No availability found for the selected range.</p>}
    </div>
  );
};

export default DatePicker;
