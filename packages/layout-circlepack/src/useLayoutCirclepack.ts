import { useLayoutFactory } from '@react-sigma/layout-core';
import circlepack, { CirclePackLayoutOptions } from 'graphology-layout/circlepack';

/**
 * React hook that helps you to manage [circlepack layout](https://graphology.github.io/standard-library/layout.html#circlepack).
 *
 * ```typescript
 * const { positions, assign } = useLayoutCirclepack({...});
 *```
 * @category Hook
 */
export function useLayoutCirclepack(options: CirclePackLayoutOptions = {}) {
  return useLayoutFactory<CirclePackLayoutOptions>(circlepack, options);
}
