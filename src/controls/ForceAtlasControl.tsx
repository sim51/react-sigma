import React, { ReactNode, useEffect, useState, useRef, CSSProperties } from "react";
import FA2LayoutSupervisor, { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";
import { isEqual } from "lodash";
import { useSigma } from "../hooks";

/**
 * Properties for `ForceAtlasControl` component
 */
export interface ForceAtlasControlProps {
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
   * The FA2 worker settings.
   */
  settings?: FA2LayoutSupervisorParameters;

  /**
   * Option to tell what we do when the component is mounted
   *  - <code>-1</code> means that we do nothing (it's the same as no value)
   *  - <code>0</code> means that we start the algo (and don't auto stop it)
   *  - <code>X</code> mans that we start the algo, and stop it after X milliseconds
   */
  autoRunFor?: number;

  /**
   * React component for display inner Start layout button.
   * This allows you to customize the render of the button.
   */
  customStartLayout?: ReactNode;

  /**
   * React component for display inner Stop layout button.
   * This allows you to customize the render of the button.
   */
  customStopLayout?: ReactNode;
}

/**
 * The `ForceAtlasControl` create a force atlas worker, as well as a UI button that allow the user to stop/start the layout
 *
 * ```typescript
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <ForceAtlasControl autoRunFor={2000} />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 *
 * See [[ForceAtlasControlProps]] for more information.
 *
 * @category Component
 */
export const ForceAtlasControl: React.FC<ForceAtlasControlProps> = ({
  id,
  className,
  style,
  settings,
  autoRunFor = -1,
  customStopLayout,
  customStartLayout,
}) => {
  // Get Sigma
  const sigma = useSigma();
  // FA2 Setting
  const fa2Settings = useRef<FA2LayoutSupervisorParameters | null>(null);
  if (settings && !isEqual(fa2Settings.current, settings)) fa2Settings.current = settings;
  // FA2 worker
  const [fa2, setFa2] = useState<FA2LayoutSupervisor | null>(null);
  // Is FA2 is running
  const [fa2IsRunning, setFa2IsRunning] = useState<boolean>(false);

  /**
   * Init component when Sigma or component settings change.
   */
  useEffect(() => {
    if (!sigma) {
      return;
    }

    // Create the FA2 worker
    const nFa2 = new FA2LayoutSupervisor(sigma.getGraph(), fa2Settings.current || {});
    setFa2(nFa2);

    // we run the algo
    let timeout: number | any = null;
    if (autoRunFor > -1 && sigma.getGraph().order > 0) {
      setFa2IsRunning(true);
      // set a timeout to stop it
      timeout =
        autoRunFor > 0
          ? window.setTimeout(() => {
              setFa2IsRunning(false);
            }, autoRunFor)
          : null;
    }

    //cleaning
    return () => {
      if (nFa2) {
        nFa2.kill();
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autoRunFor, fa2Settings, sigma]);

  /**
   * Start/Stop FA2 when the state `fa2IsRunning` change.
   */
  useEffect(() => {
    try {
      if (fa2) {
        if (fa2IsRunning === true) {
          fa2.start();
        } else {
          fa2.stop();
        }
      }
    } catch (e) {
      // Noop
    }
  }, [fa2, fa2IsRunning]);

  // Compute the class name for the button. `Default` means display the default SGV icon
  const buttonClass =
    (fa2IsRunning === true && !customStopLayout) || (fa2IsRunning === false && !customStartLayout) ? "default" : "";

  // Common html props for the div
  const props = {
    className: `react-sigma-control-forceatlas2 ${fa2IsRunning ? "running" : "stopped"} ${className ? className : ""}`,
    id,
    style,
  };

  return (
    <div {...props}>
      <button
        className={buttonClass}
        onClick={() => setFa2IsRunning(e => !e)}
        title={fa2IsRunning ? "Stop the layout animation" : "Start the layout animation"}
      >
        {fa2IsRunning === true ? customStopLayout : customStartLayout}
      </button>
    </div>
  );
};
