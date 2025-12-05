"use client";

import React, { useEffect } from "react";
import { useToast } from "@/hooks/useToast";
import Button from "./Button";

const variantStyles = {
  success: "border-success bg-success/10 text-success",
  error: "border-error bg-error/10 text-error",
  info: "border-cta bg-cta/10 text-foreground",
};

export const ToastViewport: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        dismissToast(toast.id);
      }, 4000),
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [toasts, dismissToast]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start gap-3 rounded border bg-white px-4 py-3 shadow-lg ${variantStyles[toast.variant ?? "info"]}`}
          role="status"
        >
          <div className="flex-1">
            <p className="font-semibold">{toast.title}</p>
            {toast.description && <p className="text-sm">{toast.description}</p>}
          </div>
          <Button variant="ghost" size="sm" onClick={() => dismissToast(toast.id)} aria-label="Dismiss">
            ✕
          </Button>
        </div>
      ))}
    </div>
  );
};
