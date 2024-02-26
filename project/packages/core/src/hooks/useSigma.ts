import Graph from "graphology";
import Sigma from "sigma/sigma";

import { useSigmaContext } from "./context";

/**
 * React hook to retrieve the sigma instance (from the context).
 *
 * ```typescript
 * const sigma = useSigma();
 *```
 * @category Hook
 */
export function useSigma<G extends Graph = Graph>(): Sigma<G> {
  return useSigmaContext<G>().sigma;
}
