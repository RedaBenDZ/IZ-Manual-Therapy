"use client";

import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className, ...props }) => {
  return (
    <label className={`flex items-center gap-2 text-sm ${className ?? ""}`}>
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-foreground/40 text-cta focus:ring-cta"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
