import React, { ReactNode, CSSProperties } from "react";

import { useCamera } from "../../hooks/useCamera";

/**
 * Properties for `ZoomControl` component
 */
export interface ZoomControlProps {
  /**
   * HTML class that will be added to all div button wrapper
   */
  className?: string;

  /**
   * HTML CSS style that will be added to all div button wrapper
   */
  style?: CSSProperties;

  /**
   * Number of ms for the zoom animation (default is 200)
   */
  animationDuration?: number;

  /**
   * React component for display inner zoomIn button.
   * This allows you to customize the render of the button.
   */
  customZoomIn?: ReactNode;

  /**
   * React component for display inner zoomOut button.
   * This allows you to customize the render of the button.
   */
  customZoomOut?: ReactNode;

  /**
   * React component for display inner center button.
   * This allows you to customize the render of the button.
   */
  customZoomCenter?: ReactNode;
}

/**
 * The `ZoomControl` create three UI buttons that allows the user to
 * - zoom in
 * - zoom out
 * - reset zoom (ie. see the whole graph)
 *
 * ```typescript
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <ZoomControl />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 *
 * See [[ZoomControlProps]] for more information.
 *
 * @category Component
 */
export const ZoomControl: React.FC<ZoomControlProps> = ({
  className,
  style,
  animationDuration = 200,
  customZoomIn,
  customZoomOut,
  customZoomCenter,
}) => {
  const { zoomIn, zoomOut, reset } = useCamera({ duration: animationDuration, factor: 1.5 });

  // Common html props for the div wrapper
  const props = {
    className,
    style,
  };

  return (
    <>
      <div {...props} className={`react-sigma-control-zoom-in ${className ? className : ""}`}>
        <button className={customZoomIn ? "" : "default"} onClick={() => zoomIn()} title="Zoom In">
          {customZoomIn}
        </button>
      </div>
      <div {...props} className={`react-sigma-control-zoom-out ${className ? className : ""}`}>
        <button className={customZoomOut ? "" : "default"} onClick={() => zoomOut()} title="Zoom Out">
          {customZoomOut}
        </button>
      </div>
      <div {...props} className={`react-sigma-control-zoom-center ${className ? className : ""}`}>
        <button className={customZoomCenter ? "" : "default"} onClick={() => reset()} title="See whole graph">
          {customZoomCenter}
        </button>
      </div>
    </>
  );
};
