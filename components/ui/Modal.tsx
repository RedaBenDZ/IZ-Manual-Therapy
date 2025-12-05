"use client";

import React, { useEffect } from "react";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            {title && <h3 className="text-xl font-semibold">{title}</h3>}
          </div>
          <Button aria-label="Close" variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>
        <div className="mt-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
