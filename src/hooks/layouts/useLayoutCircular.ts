import circular, { CircularLayoutOptions } from "graphology-layout/circular";

import { useLayoutFactory } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutCircular = useLayoutFactory<CircularLayoutOptions>(circular, {});
