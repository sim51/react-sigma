import React, { CSSProperties, ReactNode } from "react";

/**
 * Properties for `ControlsContainer` component.
 */
export interface ControlsContainerProps {
  /**
   * HTML id
   */
  id?: string;
  /**
   * HTML class
   */
  className?: string;
  /**
   * HTML CSS style
   */
  style?: CSSProperties;
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
export const ControlsContainer: React.FC<ControlsContainerProps> = ({
  id,
  className,
  style,
  children,
  position = "bottom-left",
}) => {
  // Common html props for the container
  const props = { className: `react-sigma-controls ${className ? className : ""} ${position}`, id, style };

  return <div {...props}>{children}</div>;
};
