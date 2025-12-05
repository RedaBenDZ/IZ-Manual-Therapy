import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

const Card: React.FC<CardProps> = ({ children, className, variant = "default" }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-foreground/10 bg-white p-6 shadow-sm",
        variant === "muted" && "bg-accent-soft/40",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
