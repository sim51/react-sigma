import FA2Layout from "graphology-layout-forceatlas2/worker";
import { ForceAtlas2LayoutParameters } from "graphology-layout-forceatlas2";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useWorkerLayoutForceAtlas2(...);
 *```
 * @category Hook
 */
export const useWorkerLayoutForceAtlas2 = useWorkerLayoutFactory<ForceAtlas2LayoutParameters>(FA2Layout);
