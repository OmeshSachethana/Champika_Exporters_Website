// src/components/UI/Button.jsx
import React from "react";

export const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Add default export for backward compatibility
export default Button;