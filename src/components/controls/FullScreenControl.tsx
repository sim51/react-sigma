import React, { ReactNode, CSSProperties } from "react";

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

  /**
   * React component for display inner enter fullscreen button.
   * This allows you to customize the render of the button.
   */
  customEnterFullScreen?: ReactNode;

  /**
   * React component for display inner exit fullscreen button.
   * This allows you to customize the render of the button.
   */
  customExitFullScreen?: ReactNode;
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
export const FullScreenControl: React.FC<FullScreenControlProps> = ({
  id,
  className,
  style,
  customEnterFullScreen,
  customExitFullScreen,
}) => {
  // Get Sigma
  const { isFullScreen, toggle } = useFullScreen();

  // Compute the class name for the button. `Default` means display the default SGV icon
  const buttonClass =
    (isFullScreen && !customExitFullScreen) || (!isFullScreen && !customEnterFullScreen) ? "default" : "";

  // Common html props for the div
  const props = {
    className: `react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"} ${className ? className : ""}`,
    id,
    style,
  };

  if (!document.fullscreenEnabled) return null;

  return (
    <div {...props}>
      <button className={buttonClass} onClick={toggle} title="Toggle Fullscreen">
        {isFullScreen ? customExitFullScreen : customEnterFullScreen}
      </button>
    </div>
  );
};
