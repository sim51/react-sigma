import random, { RandomLayoutOptions } from "graphology-layout/random";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage [random layout](https://graphology.github.io/standard-library/layout.html#random).
 *
 * ```typescript
 * const { positions, assign } = useLayoutRandom(...);
 *```
 * @category Hook
 */
export const useLayoutRandom = useLayoutFactory<RandomLayoutOptions>(random, {});
