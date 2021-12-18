import circlepack, { CirclePackLayoutOptions } from "graphology-layout/circlepack";

import { useLayoutFactory } from "./index";

/**
 * React hook that helps you to manage circlepack layout.
 *
 * ```typescript
 * const { positions, assign } = useLayoutCirclepack({...});
 *```
 * @category Hook
 */
export const useLayoutCirclepack = useLayoutFactory<CirclePackLayoutOptions>(circlepack, {});
