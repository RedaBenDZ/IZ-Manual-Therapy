"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

type Variant = "primary" | "secondary" | "destructive" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-cta text-white hover:bg-cta/90",
  secondary: "border border-foreground/20 bg-white text-foreground hover:border-cta",
  destructive: "bg-error text-white hover:bg-error/90",
  ghost: "bg-transparent text-foreground hover:bg-accent/50",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading,
  disabled,
  className,
  children,
  asChild,
  ...props
}) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta",
    variantClasses[variant],
    sizeClasses[size],
    loading || disabled ? "opacity-70" : "",
    className,
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn((children as React.ReactElement).props.className, classes),
    });
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;
