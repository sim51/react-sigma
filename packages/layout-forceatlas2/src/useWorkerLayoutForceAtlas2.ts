import FA2Layout, { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular(...);
 * // import forceAtlas2 from "graphology-layout-forceatlas2";
 * //       settings.current ? settings.current : { settings: forceAtlas2.inferSettings(sigma.getGraph()) },
 *```
 * @category Hook
 */
export const useWorkerLayoutForceAtlas2 = useWorkerLayoutFactory<FA2LayoutSupervisorParameters>(FA2Layout);
