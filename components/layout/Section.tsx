import React from "react";

interface SectionProps {
  id?: string;
  background?: "default" | "muted";
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, background = "default", children, className }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${background === "muted" ? "bg-accent-soft/40" : ""}`.trim()}
    >
      <div className={`mx-auto max-w-6xl px-4 ${className ?? ""}`}>{children}</div>
    </section>
  );
};

export default Section;
