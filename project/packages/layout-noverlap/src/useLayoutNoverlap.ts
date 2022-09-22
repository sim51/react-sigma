import noverlap, { NoverlapLayoutParameters } from "graphology-layout-noverlap";

import { useLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutNoverlap = useLayoutFactory<NoverlapLayoutParameters>(noverlap, {});
