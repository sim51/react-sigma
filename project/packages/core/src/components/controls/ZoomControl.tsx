import React, { CSSProperties } from "react";

import { ReactComponent as ZoomInIcon } from "../../assets/icons/plus-solid.svg";
import { ReactComponent as ZoomOutIcon } from "../../assets/icons/minus-solid.svg";
import { ReactComponent as ZoomResetIcon } from "../../assets/icons/dot-circle-regular.svg";
import { useCamera } from "../../hooks/useCamera";

type ZoomLabelKeys = "zoomIn" | "zoomOut" | "reset";

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

  /**
   * It's possible to customize the button, by passing to JSX Element.
   * First one is for the "zoom in", second for "zoom out" and third for "view whole graph".
   * Example :
   * ```jsx
   * <ZoomControl>
   *   <BsZoomIn />
   *   <BsZoomOut />
   *   <BiReset />
   * </FullScreenControl>
   * ```
   */
  children?: [JSX.Element, JSX.Element, JSX.Element];

  /**
   * Map of the labels we use in the component.
   * This is usefull for I18N
   */
  labels?: { [Key in ZoomLabelKeys]?: string };
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
  children,
  labels = {},
}: ZoomControlProps) => {
  const { zoomIn, zoomOut, reset } = useCamera({ duration: animationDuration, factor: 1.5 });

  // Common html props for the div wrapper
  const htmlProps = {
    style,
    className: `react-sigma-control ${className || ""}`,
  };

  return (
    <>
      <div {...htmlProps}>
        <button onClick={() => zoomIn()} title={labels["zoomIn"] || "Zoom In"}>
          {children ? children[0] : <ZoomInIcon style={{ width: "1em" }} />}
        </button>
      </div>
      <div {...htmlProps}>
        <button onClick={() => zoomOut()} title={labels["zoomOut"] || "Zoom Out"}>
          {children ? children[1] : <ZoomOutIcon style={{ width: "1em" }} />}
        </button>
      </div>
      <div {...htmlProps}>
        <button onClick={() => reset()} title={labels["reset"] || "See whole graph"}>
          {children ? children[2] : <ZoomResetIcon style={{ width: "1em" }} />}
        </button>
      </div>
    </>
  );
};
