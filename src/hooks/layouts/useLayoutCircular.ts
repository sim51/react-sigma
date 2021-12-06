import circular, { CircularLayoutOptions } from "graphology-layout/circular";

import { useLayoutFactory, LayoutHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutCircular: LayoutHook<CircularLayoutOptions> = useLayoutFactory<CircularLayoutOptions>(circular);
