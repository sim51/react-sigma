import circlepack, { CirclePackLayoutOptions } from "graphology-layout/circlepack";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage [circlepack layout](https://graphology.github.io/standard-library/layout.html#circlepack).
 *
 * ```typescript
 * const { positions, assign } = useLayoutCirclepack({...});
 *```
 * @category Hook
 */
export const useLayoutCirclepack = useLayoutFactory<CirclePackLayoutOptions>(circlepack, {});
