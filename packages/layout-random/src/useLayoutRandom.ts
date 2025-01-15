import { useLayoutFactory } from '@react-sigma/layout-core';
import random, { RandomLayoutOptions } from 'graphology-layout/random';

/**
 * React hook that helps you to manage [random layout](https://graphology.github.io/standard-library/layout.html#random).
 *
 * ```typescript
 * const { positions, assign } = useLayoutRandom(...);
 *```
 * @category Hook
 */
export function useLayoutRandom(options: RandomLayoutOptions = {}) {
  return useLayoutFactory<RandomLayoutOptions>(random, options);
}
