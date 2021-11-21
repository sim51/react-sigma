import React, { ReactNode, CSSProperties } from "react";
import { useSigma } from "../hooks/useSigma";

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
  // Get sigma
  const sigma = useSigma();

  /**
   * Function to zoom in sigma.
   */
  function zoom(ratio?: number): void {
    if (sigma) {
      if (!ratio) {
        sigma.getCamera().animatedReset({ duration: animationDuration });
      } else if (ratio > 0) {
        sigma.getCamera().animatedZoom({ duration: animationDuration, factor: 1.5 });
      } else if (ratio < 0) {
        sigma.getCamera().animatedUnzoom({ duration: animationDuration, factor: 1.5 });
      }
    }
  }

  // Common html props for the div wrapper
  const props = {
    className,
    style,
  };

  return (
    <>
      <div {...props} className={`react-sigma-control-zoom-in ${className ? className : ""}`}>
        <button className={customZoomIn ? "" : "default"} onClick={() => zoom(1)} title="Zoom In">
          {customZoomIn}
        </button>
      </div>
      <div {...props} className={`react-sigma-control-zoom-out ${className ? className : ""}`}>
        <button className={customZoomOut ? "" : "default"} onClick={() => zoom(-1)} title="Zoom Out">
          {customZoomOut}
        </button>
      </div>
      <div {...props} className={`react-sigma-control-zoom-center ${className ? className : ""}`}>
        <button className={customZoomCenter ? "" : "default"} onClick={() => zoom()} title="See whole graph">
          {customZoomCenter}
        </button>
      </div>
    </>
  );
};
