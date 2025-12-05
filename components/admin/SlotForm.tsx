import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";

const SlotForm = ({ onSubmit }: { onSubmit: (slot: { start: string; end: string }) => void }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ start, end });
      }}
    >
      <Input type="datetime-local" label="Start" value={start} onChange={(e) => setStart(e.target.value)} />
      <Input type="datetime-local" label="End" value={end} onChange={(e) => setEnd(e.target.value)} />
      <Button type="submit">Add slot</Button>
    </form>
  );
};

export default SlotForm;
