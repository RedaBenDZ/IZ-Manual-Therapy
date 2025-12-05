"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  requiredIndicator?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, requiredIndicator, className, id, ...props }) => {
  const inputId = id || props.name;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={inputId}>
          {label}
          {requiredIndicator && <span className="text-error"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full rounded border border-foreground/20 bg-white px-3 py-2 shadow-sm transition focus:border-cta",
          error ? "border-error" : "",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
};

export default Input;
