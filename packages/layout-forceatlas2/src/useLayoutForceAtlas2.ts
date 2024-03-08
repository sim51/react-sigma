import forceAtlas2, { ForceAtlas2SynchronousLayoutParameters } from "graphology-layout-forceatlas2";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage [force atlas2 layout](https://graphology.github.io/standard-library/layout-forceatlas2.html).
 *
 * ```typescript
 * const { positions, assign } = useLayoutForceAtlas2(...);
 *```
 * @category Hook
 */
export const useLayoutForceAtlas2 = useLayoutFactory<ForceAtlas2SynchronousLayoutParameters>(forceAtlas2, {
  iterations: 100,
});
