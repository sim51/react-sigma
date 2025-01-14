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
const defaultRandomLayoutOptions: RandomLayoutOptions = {};
export const useLayoutRandom = useLayoutFactory<RandomLayoutOptions>(random, defaultRandomLayoutOptions);
