import forceAtlas2, { ForceAtlas2LayoutOptions } from "graphology-layout-forceatlas2";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutForceAtlas2(...);
 *```
 * @category Hook
 */
export const useLayoutForceAtlas2 = useLayoutFactory<ForceAtlas2LayoutOptions>(forceAtlas2, { iterations: 100 });
