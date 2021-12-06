import circlepack, { CirclePackLayoutOptions } from "graphology-layout/circlepack";

import { useLayoutFactory } from "./index";

/**
 * React hook that helps you to manage circlepack layout.
 *
 * ```typescript
 * const {apply, animate} = useLayoutCirclepack({...});
 *```
 * @category Hook
 */
export const useLayoutCirclepack = useLayoutFactory<CirclePackLayoutOptions>(circlepack);
