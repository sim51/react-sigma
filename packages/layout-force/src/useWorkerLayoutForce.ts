import ForceSupervisor, { ForceLayoutSupervisorParameters } from "graphology-layout-force/worker";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular(...);
 *```
 * @category Hook
 */
export const useWorkerLayoutForce = useWorkerLayoutFactory<ForceLayoutSupervisorParameters>(ForceSupervisor);
