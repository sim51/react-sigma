import { useWorkerLayoutFactory } from '@react-sigma/layout-core';
import NoverlapLayout, { NoverlapLayoutSupervisorParameters } from 'graphology-layout-noverlap/worker';

/**
 * React hook that helps you to manage worker for [noverlap layout](https://graphology.github.io/standard-library/layout-noverlap.html).
 *
 * ```typescript
 * const { stop, start } = useWorkerLayoutNoverlap({layoutOptions});
 *```
 * @category Hook
 */
export function useWorkerLayoutNoverlap(options: NoverlapLayoutSupervisorParameters = {}) {
  return useWorkerLayoutFactory<NoverlapLayoutSupervisorParameters>(NoverlapLayout, options);
}
