import React from "react";
import ServiceCard from "@/components/features/ServiceCard";
import PackageCard from "@/components/features/PackageCard";
import type { Package, Service } from "@/types";

interface ServiceSelectorProps {
  services: Service[];
  packages: Package[];
  selectedServiceId?: string;
  selectedPackageId?: string;
  onSelectService: (id: string) => void;
  onSelectPackage: (id: string) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services,
  packages,
  selectedPackageId,
  selectedServiceId,
  onSelectPackage,
  onSelectService,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold">Services</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-lg border ${selectedServiceId === service.id ? "border-cta" : "border-transparent"}`}
              onClick={() => onSelectService(service.id)}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {packages.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold">Packages</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {packages.map((pack) => (
              <div
                key={pack.id}
                className={`rounded-lg border ${selectedPackageId === pack.id ? "border-cta" : "border-transparent"}`}
                onClick={() => onSelectPackage(pack.id)}
              >
                <PackageCard pack={pack} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
