import circular, { CircularLayoutOptions } from "graphology-layout/circular";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage [circle layout](https://graphology.github.io/standard-library/layout.html#circular).
 *
 * ```typescript
 * const { positions, assign } = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutCircular = useLayoutFactory<CircularLayoutOptions>(circular, {});
