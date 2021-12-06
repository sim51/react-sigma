import React, { ReactNode, useEffect, useState, CSSProperties } from "react";

import { useSigmaContext } from "../../hooks/context";

function toggleFullScreen(dom: HTMLElement) {
  if (document.fullscreenElement !== dom) {
    dom.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

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
  const { container } = useSigmaContext();
  // Is full screen mode enabled
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const toggleState = () => setFullScreen(v => !v);

  useEffect(() => {
    document.addEventListener("fullscreenchange", toggleState);
    return () => document.removeEventListener("fullscreenchange", toggleState);
  }, [toggleState]);

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
      <button className={buttonClass} onClick={() => toggleFullScreen(container)} title="Toggle Fullscreen">
        {isFullScreen ? customExitFullScreen : customEnterFullScreen}
      </button>
    </div>
  );
};
