import random, { RandomLayoutOptions } from "graphology-layout/random";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circlepack layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCirclepack(...);
 *```
 * @category Hook
 */
export const useLayoutRandom = useLayoutFactory<RandomLayoutOptions>(random, {});
