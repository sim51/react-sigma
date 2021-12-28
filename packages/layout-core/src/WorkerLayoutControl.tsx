import React, { ReactNode, useEffect, CSSProperties } from "react";

import { useSigma } from "@react-sigma/core";
import { LayoutWorkerHook } from "./useWorkerLayoutFactory";

/**
 * Properties for `WorkerLayoutControl` component
 */
export interface WorkerLayoutControlProps<T> {
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
   * The layout hook to use
   */
  layout: LayoutWorkerHook<T>;

  /**
   * Settings of the layout.
   */
  settings: T;

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

export function WorkerLayoutControl<T>({
  id,
  className,
  style,
  layout,
  settings,
  autoRunFor,
  customStartLayout,
  customStopLayout,
}: WorkerLayoutControlProps<T>) {
  // Get Sigma
  const sigma = useSigma();
  // Get layout
  const { stop, start, isRunning } = layout(settings);
  // Compute the class name for the button. `Default` means display the default SGV icon
  const buttonClass =
    (isRunning === true && !customStopLayout) || (isRunning === false && !customStartLayout) ? "default" : "";
  // Common html props for the div
  const props = {
    className: `react-sigma-control-layout ${isRunning === true ? "running" : "stopped"} ${className ? className : ""}`,
    id,
    style,
  };

  /**
   * Init component when Sigma or component settings change.
   */
  useEffect(() => {
    if (!sigma) {
      return;
    }

    // we run the algo
    let timeout: number | any = null;
    if (autoRunFor && autoRunFor > -1 && sigma.getGraph().order > 0) {
      start();
      // set a timeout to stop it
      timeout =
        autoRunFor > 0
          ? window.setTimeout(() => {
              stop();
            }, autoRunFor)
          : null;
    }

    //cleaning
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autoRunFor, start, stop, sigma]);

  return (
    <div {...props}>
      <button
        className={buttonClass}
        onClick={() => (isRunning ? stop() : start())}
        title={isRunning ? "Stop the layout animation" : "Start the layout animation"}
      >
        {isRunning === true ? customStopLayout : customStartLayout}
      </button>
    </div>
  );
}
