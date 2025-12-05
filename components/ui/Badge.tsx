import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: "confirmed" | "cancelled" | "completed" | "pending";
}

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const styles: Record<BadgeProps["status"], string> = {
    confirmed: "bg-success/20 text-success",
    cancelled: "bg-error/20 text-error",
    completed: "bg-cta/20 text-cta",
    pending: "bg-accent/40 text-foreground",
  };

  return <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", styles[status])}>{status}</span>;
};

export default Badge;
