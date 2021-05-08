import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export const ControlsContainer: React.FC<Props> = ({ children, position = "bottom-left" }) => {
  return <div className={`react-sigma-controls ${position}`}>{children}</div>;
};
