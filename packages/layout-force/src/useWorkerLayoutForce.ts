import { useWorkerLayoutFactory } from '@react-sigma/layout-core';
import ForceSupervisor, { ForceLayoutSupervisorParameters } from 'graphology-layout-force/worker';

/**
 * React hook that helps you to manage worker of [force layout](https://graphology.github.io/standard-library/layout-force.html).
 *
 * ```typescript
 * const { stop, start } = useWorkerLayoutForce(...);
 *```
 * @category Hook
 */
export function useWorkerLayoutForce(options: ForceLayoutSupervisorParameters = {}) {
  return useWorkerLayoutFactory<ForceLayoutSupervisorParameters>(ForceSupervisor, options);
}
