import React from "react";
import "./FancyButton.css"; // Import your CSS file for styling

interface FancyButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button className={`fancy-button ${className}`} onClick={onClick}>
      <div className="text-wrapper">{text}</div>
    </button>
  );
};