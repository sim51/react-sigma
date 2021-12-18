import forceAtlas2, { ForceAtlas2LayoutOptions } from "graphology-layout-forceatlas2";

import { useLayoutFactory, LayoutHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutForceAtlas2: LayoutHook<ForceAtlas2LayoutOptions> = useLayoutFactory<ForceAtlas2LayoutOptions>(
  forceAtlas2,
  { iterations: 100 },
);
