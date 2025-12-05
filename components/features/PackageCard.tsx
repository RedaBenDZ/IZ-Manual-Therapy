import Card from "../ui/Card";
import Button from "../ui/Button";
import type { Package } from "@/types";

interface PackageCardProps {
  pack: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pack }) => {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{pack.name}</h3>
        <p className="text-sm text-foreground/80">{pack.sessions} sessions</p>
        {pack.savings && <p className="text-sm font-medium text-success">Save {pack.savings}</p>}
        <p className="text-lg font-semibold">£{(pack.price_pence / 100).toFixed(2)}</p>
        {pack.services && pack.services.length > 0 && (
          <ul className="list-disc space-y-1 pl-4 text-sm text-foreground/70">
            {pack.services.map((service) => (
              <li key={service.service_id}>{service.name}</li>
            ))}
          </ul>
        )}
      </div>
      <Button className="mt-4" variant="secondary" asChild>
        <a href="/book">Book package</a>
      </Button>
    </Card>
  );
};

export default PackageCard;
