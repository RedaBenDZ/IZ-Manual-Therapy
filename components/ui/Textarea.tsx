"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  requiredIndicator?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, requiredIndicator, className, id, ...props }) => {
  const textareaId = id || props.name;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={textareaId}>
          {label}
          {requiredIndicator && <span className="text-error"> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-[120px] w-full rounded border border-foreground/20 bg-white px-3 py-2 shadow-sm transition focus:border-cta",
          error ? "border-error" : "",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
};

export default Textarea;
