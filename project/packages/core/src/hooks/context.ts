import Graph from "graphology";
import { createContext, useContext } from "react";
import Sigma from "sigma/sigma";

export interface SigmaContextInterface<G extends Graph = Graph> {
  sigma: Sigma<G>;
  container: HTMLElement;
}

/**
 * @hidden
 */
export const SigmaContext = createContext<SigmaContextInterface | null>(null);

/**
 * @hidden
 */
export const SigmaProvider = SigmaContext.Provider;

/**
 * React hook that store the sigma and html container reference.
 *
 * ```typescript
 * const {sigma, container} = useSigmaContext();
 *```
 * See [[SigmaContextInterface]] for more information.
 *
 * @category Hook
 */
export function useSigmaContext<G extends Graph = Graph>(): SigmaContextInterface<G> {
  const context = useContext(SigmaContext);
  if (context == null) {
    throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");
  }
  return context as SigmaContextInterface<G>;
}
