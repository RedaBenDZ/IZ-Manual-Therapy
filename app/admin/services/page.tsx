import ServiceForm from "@/components/admin/ServiceForm";
import PackageForm from "@/components/admin/PackageForm";
import Card from "@/components/ui/Card";

export default function AdminServicesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Services & Packages</h1>
      <Card>
        <h2 className="text-xl font-semibold">Add service</h2>
        <ServiceForm onSubmit={() => {}} />
      </Card>
      <Card>
        <h2 className="text-xl font-semibold">Add package</h2>
        <PackageForm onSubmit={() => {}} />
      </Card>
    </div>
  );
}
