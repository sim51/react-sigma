import { useLayoutFactory } from '@react-sigma/layout-core';
import noverlap, { NoverlapLayoutParameters } from 'graphology-layout-noverlap';

/**
 * React hook that helps you to manage [noverlap layout](https://graphology.github.io/standard-library/layout-noverlap.html).
 *
 * ```typescript
 * const { positions, assign } = useLayoutNoverlap(...);
 *```
 * @category Hook
 */
export const useLayoutNoverlap = useLayoutFactory<NoverlapLayoutParameters>(noverlap, {});
