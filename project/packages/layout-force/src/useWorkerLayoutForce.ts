import ForceSupervisor, { ForceLayoutSupervisorParameters } from "graphology-layout-force/worker";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage worker of [force layout](https://graphology.github.io/standard-library/layout-force.html).
 *
 * ```typescript
 * const { stop, start } = useWorkerLayoutForce(...);
 *```
 * @category Hook
 */
export const useWorkerLayoutForce = useWorkerLayoutFactory<ForceLayoutSupervisorParameters>(ForceSupervisor);
