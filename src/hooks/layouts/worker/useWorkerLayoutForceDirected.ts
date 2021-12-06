import ForceSupervisor, { ForceLayoutSupervisorParameters } from "graphology-layout-force/worker";

import { useWorkerLayoutFactory, LayoutWorkerHook } from "./index";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useWorkerLayoutForceDirected: LayoutWorkerHook<ForceLayoutSupervisorParameters> = useWorkerLayoutFactory<
  ForceLayoutSupervisorParameters
>(ForceSupervisor);
