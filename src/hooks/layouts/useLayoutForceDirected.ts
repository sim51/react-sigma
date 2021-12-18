import force, { ForceLayoutParameters } from "graphology-layout-force";

import { useLayoutFactory, LayoutHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutForceDirected: LayoutHook<ForceLayoutParameters> = useLayoutFactory<ForceLayoutParameters>(
  force,
  { maxIterations: 100 },
);
