import ClientDetail from "@/components/admin/ClientDetail";
import type { Client } from "@/types";

export default function ClientDetailPage() {
  const client: Client = {
    id: "1",
    email: "client@example.com",
    name: "Client Name",
    phone: "07700900000",
    address: "1 High Street",
    postcode: "BR1 1AA",
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Client detail</h1>
      <ClientDetail client={client} />
    </div>
  );
}
