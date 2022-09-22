import React, { CSSProperties } from "react";

import { ReactComponent as EnterIcon } from "../../assets/icons/expand-solid.svg";
import { ReactComponent as ExitIcon} from "../../assets/icons/compress-solid.svg";
import { useFullScreen } from "../../hooks/useFullScreen";

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
   * It's possible to customize the button, by passing to JSX Element.
   * First one is for the "enter fullscreen", and the second to "exit fullscreen".
   * Example :
   * ```jsx
   * <FullScreenControl>
   *   <>
   *     <BiFullscreen />
   *     <BiExitFullscreen />
   *   </>
   * </FullScreenControl>
   * ```
   */
  children?: [JSX.Element, JSX.Element];
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
  children,
}: FullScreenControlProps) => {
  // Get Sigma
  const { isFullScreen, toggle } = useFullScreen();

  // Common html props for the div
  const htmlProps = {
    className: `react-sigma-control ${className || ""}`,
    id,
    style,
  };

  if (!document.fullscreenEnabled) return null;

  return (
    <div {...htmlProps}>
      <button onClick={toggle} title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}>
        {children && !isFullScreen && children[0]}
        {children && isFullScreen && children[1]}
        {!children && !isFullScreen && <EnterIcon style={{width:"1em"}}/>}
        {!children && isFullScreen && <ExitIcon style={{width:"1em"}}/>}
      </button>
    </div>
  );
};
