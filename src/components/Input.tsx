// src/components/Input.tsx
import React, { forwardRef } from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, placeholder }, ref) => {
  return (
    <div className="mb-4">
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
});
