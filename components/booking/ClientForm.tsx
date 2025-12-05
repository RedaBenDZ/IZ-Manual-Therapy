import Input from "@/components/ui/Input";
import type { Client } from "@/types";

interface ClientFormProps {
  client: Partial<Client>;
  onChange: (field: keyof Client, value: string) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ client, onChange }) => (
  <div className="grid gap-4 md:grid-cols-2">
    <Input label="Full name" value={client.name ?? ""} onChange={(e) => onChange("name", e.target.value)} requiredIndicator />
    <Input
      label="Email"
      type="email"
      value={client.email ?? ""}
      onChange={(e) => onChange("email", e.target.value)}
      requiredIndicator
    />
    <Input label="Phone" value={client.phone ?? ""} onChange={(e) => onChange("phone", e.target.value)} requiredIndicator />
    <Input
      label="Address"
      value={client.address ?? ""}
      onChange={(e) => onChange("address", e.target.value)}
      requiredIndicator
    />
    <Input
      label="Postcode"
      value={client.postcode ?? ""}
      onChange={(e) => onChange("postcode", e.target.value)}
      requiredIndicator
    />
  </div>
);

export default ClientForm;
