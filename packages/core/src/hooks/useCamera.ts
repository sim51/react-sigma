import { useCallback, useRef } from "react";
import { isEqual } from "lodash";
import { AnimateOptions } from "sigma/utils/animate";
import { CameraState } from "sigma/types";

import { useSigma } from "./useSigma";

type CameraOptions = Partial<AnimateOptions> & { factor?: number };

/**
 * React hook that helps you to manage the camera.
 *
 * ```typescript
 * const {zoomIn, zoomOut, reset, goto, gotoNode } = useCamera();
 *```
 *
 * @category Hook
 */
export function useCamera(
  options?: CameraOptions,
): {
  zoomIn: (options?: CameraOptions) => void;
  zoomOut: (options?: CameraOptions) => void;
  reset: (options?: Partial<AnimateOptions>) => void;
  goto: (state: Partial<CameraState>, options?: Partial<AnimateOptions>) => void;
  gotoNode: (nodeKey: string, options?: Partial<AnimateOptions>) => void;
} {
  const sigma = useSigma();
  // Default camera options
  const defaultOptions = useRef<CameraOptions>();
  if (!isEqual(defaultOptions.current, options)) defaultOptions.current = options;

  const zoomIn = useCallback(
    (options?: CameraOptions) => {
      sigma.getCamera().animatedZoom({ ...defaultOptions.current, ...options });
    },
    [sigma, defaultOptions],
  );

  const zoomOut = useCallback(
    (options?: CameraOptions) => {
      sigma.getCamera().animatedUnzoom({ ...defaultOptions.current, ...options });
    },
    [sigma, defaultOptions],
  );

  const reset = useCallback(
    (options?: Partial<AnimateOptions>) => {
      sigma.getCamera().animatedReset({ ...defaultOptions.current, ...options });
    },
    [sigma, defaultOptions],
  );

  const goto = useCallback(
    (state: Partial<CameraState>, options?: Partial<AnimateOptions>) => {
      sigma.getCamera().animate(state, { ...defaultOptions.current, ...options });
    },
    [sigma, defaultOptions],
  );

  const gotoNode = useCallback(
    (nodeKey: string, options?: Partial<AnimateOptions>) => {
      const nodeDisplayData = sigma.getNodeDisplayData(nodeKey);
      if (nodeDisplayData) sigma.getCamera().animate(nodeDisplayData, { ...defaultOptions.current, ...options });
      else console.log(`Node ${nodeKey} not found`);
    },
    [sigma, defaultOptions],
  );

  return { zoomIn, zoomOut, reset, goto, gotoNode };
}
