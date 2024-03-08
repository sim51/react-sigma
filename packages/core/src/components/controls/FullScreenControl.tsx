import React, { CSSProperties, RefObject } from "react";

import { ReactComponent as EnterIcon } from "../../assets/icons/expand-solid.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/compress-solid.svg";
import { useFullScreen } from "../../hooks/useFullScreen";

type FullScreenLabelKeys = "enter" | "exit";

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
   * If defined, this container will be taken for the fullscreen instead of the sigma one.
   */
  container?: RefObject<HTMLElement>;

  /**
   * It's possible to customize the button, by passing to JSX Element.
   * First one is for the "enter fullscreen", and the second to "exit fullscreen".
   * Example :
   * ```jsx
   * <FullScreenControl>
   *   <BiFullscreen />
   *   <BiExitFullscreen />
   * </FullScreenControl>
   * ```
   */
  children?: [JSX.Element, JSX.Element];

  /**
   * Map of the labels we use in the component.
   * This is usefull for I18N
   */
  labels?: { [Key in FullScreenLabelKeys]?: string };
}

/**
 * The `FullScreenControl` create a UI button that allows the user to display the graph in fullscreen
 *
 * ```jsx
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <FullScreenControl />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 * See [[FullScreenControlProps]] for more information.
 *
 * @category Component
 */
export const FullScreenControl: React.FC<FullScreenControlProps> = ({
  id,
  className,
  style,
  container,
  children,
  labels = {},
}: FullScreenControlProps) => {
  // Get Sigma
  const { isFullScreen, toggle } = useFullScreen(container?.current);

  // Common html props for the div
  const htmlProps = {
    className: `react-sigma-control ${className || ""}`,
    id,
    style,
  };

  if (!document.fullscreenEnabled) return null;

  return (
    <div {...htmlProps}>
      <button
        onClick={toggle}
        title={isFullScreen ? labels["exit"] || "Exit fullscreen" : labels["enter"] || "Enter fullscreen"}
      >
        {children && !isFullScreen && children[0]}
        {children && isFullScreen && children[1]}
        {!children && !isFullScreen && <EnterIcon style={{ width: "1em" }} />}
        {!children && isFullScreen && <ExitIcon style={{ width: "1em" }} />}
      </button>
    </div>
  );
};
