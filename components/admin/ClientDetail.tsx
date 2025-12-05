import Card from "@/components/ui/Card";
import type { Client, MedicalHistory } from "@/types";

const ClientDetail = ({ client, medical }: { client: Client; medical?: MedicalHistory }) => (
  <div className="space-y-4">
    <Card>
      <h3 className="text-xl font-semibold">Client details</h3>
      <p>{client.name}</p>
      <p>{client.email}</p>
      <p>{client.phone}</p>
      <p>{client.address}</p>
      <p>{client.postcode}</p>
    </Card>
    {medical && (
      <Card>
        <h3 className="text-xl font-semibold">Medical history</h3>
        <p>Conditions: {(medical.conditions ?? []).join(", ") || "None"}</p>
      </Card>
    )}
  </div>
);

export default ClientDetail;
