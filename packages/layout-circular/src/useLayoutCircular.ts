import { useLayoutFactory } from '@react-sigma/layout-core';
import circular, { CircularLayoutOptions } from 'graphology-layout/circular';

/**
 * React hook that helps you to manage [circle layout](https://graphology.github.io/standard-library/layout.html#circular).
 *
 * ```typescript
 * const { positions, assign } = useLayoutCircular(...);
 *```
 * @category Hook
 */
export function useLayoutCircular(options: CircularLayoutOptions = {}) {
  return useLayoutFactory<CircularLayoutOptions>(circular, options);
}
