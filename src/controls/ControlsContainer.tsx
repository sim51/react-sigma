import React, { ReactNode } from "react";

/**
 * Properties for `ControlsContainer` component
 */
export interface ControlsContainerProps {
  /*
   * @hidden
   */
  children?: ReactNode;
  /**
   * Position of the container
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

/**
 * The `ControlsContainer` is just a wrapper for other control components.
 * It defines their position and also their style with its CSS class `react-sigma-controls`.
 *
 * ```typescript
 * <SigmaContainer>
 *   <ControlsContainer position={"bottom-right"}>
 *     <ForceAtlasControl autoRunFor={2000} />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 *
 * See [[ControlsContainerProps]] for more information.
 *
 * @category Component
 */
export const ControlsContainer: React.FC<ControlsContainerProps> = ({ children, position = "bottom-left" }) => {
  return <div className={`react-sigma-controls ${position}`}>{children}</div>;
};
