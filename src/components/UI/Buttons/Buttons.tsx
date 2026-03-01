import React from "react";

interface VoltageButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const VoltageButton: React.FC<VoltageButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="voltage-btn">
      <span className="voltage-content">{children}</span>
      <span className="voltage-border" />
    </button>
  );
};