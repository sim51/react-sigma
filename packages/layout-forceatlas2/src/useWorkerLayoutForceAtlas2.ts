import { useWorkerLayoutFactory } from '@react-sigma/layout-core';
import { ForceAtlas2LayoutParameters } from 'graphology-layout-forceatlas2';
import FA2Layout from 'graphology-layout-forceatlas2/worker';

/**
 * React hook that helps you to manage worker of [force atlas2 layout](https://graphology.github.io/standard-library/layout-forceatlas2.html).
 *
 * ```typescript
 * const { stop, start } = useWorkerLayoutForceAtlas2(...);
 *```
 * @category Hook
 */
export function useWorkerLayoutForceAtlas2(options: ForceAtlas2LayoutParameters = {}) {
  return useWorkerLayoutFactory<ForceAtlas2LayoutParameters>(FA2Layout, options);
}
