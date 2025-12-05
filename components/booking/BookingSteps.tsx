import React from "react";

const steps = ["Service", "Date", "Details", "Medical", "Review", "Pay"];

const BookingSteps = ({ currentStep }: { currentStep: number }) => (
  <div className="flex flex-wrap items-center gap-2 text-sm">
    {steps.map((step, index) => (
      <React.Fragment key={step}>
        <div className={`flex items-center gap-2 rounded-full px-3 py-1 ${index === currentStep ? "bg-cta text-white" : "bg-accent/60"}`}>
          <span className="font-semibold">{index + 1}</span>
          <span>{step}</span>
        </div>
        {index < steps.length - 1 && <span className="text-foreground/50">→</span>}
      </React.Fragment>
    ))}
  </div>
);

export default BookingSteps;
