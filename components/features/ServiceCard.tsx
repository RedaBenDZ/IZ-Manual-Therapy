import Button from "../ui/Button";
import Card from "../ui/Card";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p className="text-sm text-foreground/80">{service.description}</p>
        <p className="text-sm font-medium text-foreground">{service.duration_minutes} minutes</p>
        <p className="text-lg font-semibold">£{(service.price_pence / 100).toFixed(2)}</p>
      </div>
      <Button className="mt-4" variant="secondary" onClick={() => onSelect?.(service)} asChild>
        <a href="/book">Book</a>
      </Button>
    </Card>
  );
};

export default ServiceCard;
