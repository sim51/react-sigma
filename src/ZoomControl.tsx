import React from "react";
import { useSigma } from "./hooks";

interface Props {
  animationDuration?: number;
}

export const ZoomControl: React.FC<Props> = ({ animationDuration = 200 }) => {
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
        sigma.getCamera().animatedZoom({ duration: animationDuration });
      } else if (ratio < 0) {
        sigma.getCamera().animatedUnzoom({ duration: animationDuration });
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
