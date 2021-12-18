import noverlap, { NoverlapLayoutParameters } from "graphology-layout-noverlap";

import { useLayoutFactory, LayoutHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {apply, assign} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useLayoutNoverlap: LayoutHook<NoverlapLayoutParameters> = useLayoutFactory<NoverlapLayoutParameters>(
  noverlap,
  {},
);
