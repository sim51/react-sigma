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
export const useLayoutForce = useLayoutFactory<ForceLayoutParameters>(force, {
  maxIterations: 100,
});
