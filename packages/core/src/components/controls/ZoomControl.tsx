import React, { CSSProperties } from "react";

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
   * Number of ms for the zoom animation (default is 200ms)
   */
  animationDuration?: number;
}

/**
 * The `ZoomControl` create three UI buttons that allows the user to
 * - zoom in
 * - zoom out
 * - reset zoom (ie. see the whole graph)
 *
 * ```jsx
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <ZoomControl />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 * See [[ZoomControlProps]] for more information.
 *
 * @category Component
 */
export const ZoomControl: React.FC<ZoomControlProps> = ({
  className,
  style,
  animationDuration = 200,
}: ZoomControlProps) => {
  const { zoomIn, zoomOut, reset } = useCamera({ duration: animationDuration, factor: 1.5 });

  // Common html props for the div wrapper
  const htmlProps = {
    style,
  };

  return (
    <>
      <div {...htmlProps} className={`react-sigma-control-zoom-in ${className ? className : ""}`}>
        <button onClick={() => zoomIn()} title="Zoom In">
          Zoom In
        </button>
      </div>
      <div {...htmlProps} className={`react-sigma-control-zoom-out ${className ? className : ""}`}>
        <button onClick={() => zoomOut()} title="Zoom Out">
          Zoom Out
        </button>
      </div>
      <div {...htmlProps} className={`react-sigma-control-zoom-center ${className ? className : ""}`}>
        <button onClick={() => reset()} title="See whole graph">
          See whole graph
        </button>
      </div>
    </>
  );
};
