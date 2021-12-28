import NoverlapLayout, { NoverlapLayoutSupervisorParameters } from "graphology-layout-noverlap/worker";

import { useWorkerLayoutFactory } from "@react-sigma/layout-core";

/**
 * React hook that helps you to manage circle layout.
 *
 * ```typescript
 * const {stop, start} = useLayoutCircular({layoutOptions});
 *```
 * @category Hook
 */
export const useWorkerLayoutNoverlap = useWorkerLayoutFactory<NoverlapLayoutSupervisorParameters>(NoverlapLayout);
