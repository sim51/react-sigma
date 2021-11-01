import React, { ReactNode } from "react";
import { useSigma } from "../hooks";

/**
 * Properties for `ZoomControl` component
 */
export interface ZoomControlProps {
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
  customZoomIn,
  customZoomOut,
  customZoomCenter,
  animationDuration = 200,
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

  return (
    <>
      <div className="react-sigma-control-zoom-in">
        <button className={customZoomIn ? "" : "default"} onClick={() => zoom(1)} title="Zoom In">
          {customZoomIn}
        </button>
      </div>
      <div className="react-sigma-control-zoom-out">
        <button className={customZoomOut ? "" : "default"} onClick={() => zoom(-1)} title="Zoom Out">
          {customZoomOut}
        </button>
      </div>
      <div className="react-sigma-control-zoom-center">
        <button className={customZoomCenter ? "" : "default"} onClick={() => zoom()} title="See whole graph">
          {customZoomCenter}
        </button>
      </div>
    </>
  );
};
