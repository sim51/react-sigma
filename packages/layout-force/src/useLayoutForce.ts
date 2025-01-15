import { useLayoutFactory } from '@react-sigma/layout-core';
import force, { ForceLayoutParameters } from 'graphology-layout-force';

/**
 * React hook that helps you to manage [force layout](https://graphology.github.io/standard-library/layout-force.html).
 *
 * ```typescript
 * const { positions, assign } = useLayoutForce(...);
 *```
 * @category Hook
 */
export function useLayoutForce(
  options: ForceLayoutParameters = {
    maxIterations: 100,
  },
) {
  return useLayoutFactory<ForceLayoutParameters>(force, options);
}
