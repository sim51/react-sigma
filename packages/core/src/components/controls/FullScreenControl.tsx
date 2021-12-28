import React, { CSSProperties } from "react";

import FsEnterIcon from "../../assets/icons/expand-solid.svg";
// import { ReactComponent as FsExitIcon } from "../../assets/icons/plus-solid.svg";
import { useFullScreen } from "../../hooks/useFullScreen";

/**
 * Properties for `FullScreenControl` component.
 */
export interface FullScreenControlProps {
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
}

/**
 * The `FullScreenControl` create a UI button that allows the user to display the graph in fullscreen
 *
 * ```typescript
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <FullScreenControl />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 *
 * @category Component
 */
export const FullScreenControl: React.FC<FullScreenControlProps> = ({ id, className, style }) => {
  // Get Sigma
  const { isFullScreen, toggle } = useFullScreen();

  // Common html props for the div
  const props = {
    className: `react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"} ${className ? className : ""}`,
    id,
    style,
  };

  if (!document.fullscreenEnabled) return null;

  return (
    <div {...props}>
      <button onClick={toggle} title={isFullScreen ? "Exit fullscreen" : "Fullscreen"}>
        <img src={FsEnterIcon} alt="icon" />
      </button>
    </div>
  );
};
