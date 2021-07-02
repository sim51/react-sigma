import React from "react";
import { useSigma } from "../hooks";

/**
 * Properties for `ZoomControl` component
 */
export interface ZoomControlProps {
  /**
   * Number of ms for the zoom animation (default is 200)
   */
  animationDuration?: number;
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
export const ZoomControl: React.FC<ZoomControlProps> = ({ animationDuration = 200 }) => {
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
        <button onClick={() => zoom(1)} title="Zoom In"></button>
      </div>
      <div className="react-sigma-control-zoom-out">
        <button onClick={() => zoom(-1)} title="Zoom Out"></button>
      </div>
      <div className="react-sigma-control-zoom-center">
        <button onClick={() => zoom()} title="See whole graph"></button>
      </div>
    </>
  );
};
