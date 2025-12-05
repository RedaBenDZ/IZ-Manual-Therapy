import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useState } from "react";

const ServiceForm = ({ onSubmit }: { onSubmit: (service: { name: string; description: string; duration: number; price: number }) => void }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(60);
  const [price, setPrice] = useState(60);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, description, duration, price });
      }}
    >
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input label="Duration (minutes)" type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value, 10))} />
      <Input label="Price (£)" type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value, 10))} />
      <Button type="submit">Save service</Button>
    </form>
  );
};

export default ServiceForm;
