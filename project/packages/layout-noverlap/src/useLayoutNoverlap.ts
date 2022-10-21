import noverlap, { NoverlapLayoutParameters } from "graphology-layout-noverlap";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage [noverlap layout](https://graphology.github.io/standard-library/layout-noverlap.html).
 *
 * ```typescript
 * const { positions, assign } = useLayoutNoverlap(...);
 *```
 * @category Hook
 */
export const useLayoutNoverlap = useLayoutFactory<NoverlapLayoutParameters>(noverlap, {});
