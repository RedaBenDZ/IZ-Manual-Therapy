import ClientsList from "@/components/admin/ClientsList";
import type { Client } from "@/types";

export default function AdminClientsPage() {
  const clients: Client[] = [];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Clients</h1>
      <ClientsList clients={clients} />
    </div>
  );
}
