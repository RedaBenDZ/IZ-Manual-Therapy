import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";

const PackageForm = ({ onSubmit }: { onSubmit: (pack: { name: string; sessions: number; price: number }) => void }) => {
  const [name, setName] = useState("");
  const [sessions, setSessions] = useState(3);
  const [price, setPrice] = useState(100);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, sessions, price });
      }}
    >
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Sessions" type="number" value={sessions} onChange={(e) => setSessions(parseInt(e.target.value, 10))} />
      <Input label="Price (£)" type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value, 10))} />
      <Button type="submit">Save package</Button>
    </form>
  );
};

export default PackageForm;
