"use client";

import { useState } from "react";
import Card from "../ui/Card";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <Card key={item.question}>
          <button
            className="flex w-full items-center justify-between text-left text-lg font-semibold"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <p className="mt-2 text-foreground/80">{item.answer}</p>}
        </Card>
      ))}
    </div>
  );
};

export default FAQAccordion;
