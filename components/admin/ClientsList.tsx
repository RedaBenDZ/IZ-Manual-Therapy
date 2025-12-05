import Card from "@/components/ui/Card";
import Link from "next/link";
import type { Client } from "@/types";

const ClientsList = ({ clients }: { clients: Client[] }) => (
  <Card>
    <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
      <span>Name</span>
      <span>Email</span>
      <span>Phone</span>
      <span>Actions</span>
    </div>
    <div className="mt-3 space-y-2 text-sm">
      {clients.map((client) => (
        <div key={client.id} className="grid grid-cols-4 items-center gap-2 rounded bg-accent-soft/40 px-2 py-1">
          <span>{client.name}</span>
          <span>{client.email}</span>
          <span>{client.phone}</span>
          <Link className="text-cta underline" href={`/admin/clients/${client.id}`}>
            View
          </Link>
        </div>
      ))}
    </div>
  </Card>
);

export default ClientsList;
