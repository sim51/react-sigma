import force, { ForceLayoutParameters } from "graphology-layout-force";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutForce = useLayoutFactory<ForceLayoutParameters>(force, {
  maxIterations: 100,
});
