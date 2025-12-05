"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, error, className, children, id, ...props }) => {
  const selectId = id || props.name;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          "w-full rounded border border-foreground/20 bg-white px-3 py-2 shadow-sm transition focus:border-cta",
          error ? "border-error" : "",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
};

export default Select;
