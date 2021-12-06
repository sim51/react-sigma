import FA2Layout, { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";

import { useWorkerLayoutFactory, LayoutWorkerHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useWorkerLayoutForceAtlas2: LayoutWorkerHook<FA2LayoutSupervisorParameters> = useWorkerLayoutFactory<
  FA2LayoutSupervisorParameters
>(FA2Layout);

// import forceAtlas2 from "graphology-layout-forceatlas2";
//       settings.current ? settings.current : { settings: forceAtlas2.inferSettings(sigma.getGraph()) },
