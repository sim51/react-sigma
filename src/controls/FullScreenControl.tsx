import React, { ReactNode, useEffect, useState, useRef, CSSProperties } from "react";
import { useSigma } from "../hooks";

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
  const sigma = useSigma();
  // Is full screen mode enabled
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  // HTML element for the button
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * When sigma or state `isFullScreen`, change
   */
  useEffect(() => {
    if (containerRef.current) {
      const sigmaRootElement = containerRef.current.closest("div.react-sigma-v2");
      if (sigmaRootElement) {
        if (isFullScreen && !sigmaRootElement.classList.contains("fullscreen")) {
          sigmaRootElement.classList.add("fullscreen");
          sigma.refresh();
        }
        if (!isFullScreen && sigmaRootElement.classList.contains("fullscreen")) {
          sigmaRootElement.classList.remove("fullscreen");
          sigma.refresh();
        }
      }
    }
  }, [isFullScreen, sigma]);

  // Compute the class name for the button. `Default` means display the default SGV icon
  const buttonClass =
    (isFullScreen === true && !customExitFullScreen) || (isFullScreen === false && !customEnterFullScreen)
      ? "default"
      : "";

  // Common html props for the div
  const props = {
    className: `react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"} ${className ? className : ""}`,
    id,
    style,
  };

  return (
    <div ref={containerRef} {...props}>
      <button className={buttonClass} onClick={() => setFullScreen(!isFullScreen)} title="Toggle Fullscreen">
        {isFullScreen === true ? customExitFullScreen : customEnterFullScreen}
      </button>
    </div>
  );
};
