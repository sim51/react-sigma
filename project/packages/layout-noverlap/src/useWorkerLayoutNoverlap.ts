import NoverlapLayout, { NoverlapLayoutSupervisorParameters } from "graphology-layout-noverlap/worker";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage worker for [noverlap layout](https://graphology.github.io/standard-library/layout-noverlap.html).
 *
 * ```typescript
 * const { stop, start } = useWorkerLayoutNoverlap({layoutOptions});
 *```
 * @category Hook
 */
export const useWorkerLayoutNoverlap = useWorkerLayoutFactory<NoverlapLayoutSupervisorParameters>(NoverlapLayout);
