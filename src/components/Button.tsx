import React from "react";

interface ButtonProps {
  text: string;
  color: string; // "blue", "red", "green", etc.
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <button
      className={`relative px-6 py-3 text-white text-lg font-bold uppercase rounded-md border-4 
        border-black bg-${color}-500 shadow-md transition-transform duration-200 active:scale-95`}
      onClick={onClick}
    >
      {text}
      {/* Black Stroke Effect */}
      <div className="absolute inset-0 border-2 border-black rounded-md"></div>
    </button>
  );
};

export default Button;
