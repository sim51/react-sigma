import { Attributes } from 'graphology-types';
import { createContext, useContext } from 'react';
import Sigma from 'sigma';

export interface SigmaContextInterface<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
> {
  sigma: Sigma<N, E, G>;
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
 *
 * See {@link SigmaContextInterface} for more information.
 *
 * @category Hook
 */
export function useSigmaContext<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
>(): SigmaContextInterface<N, E, G> {
  const context = useContext(SigmaContext);
  if (context == null) {
    throw new Error('No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>');
  }
  // cast context to the one with good generics
  return context as unknown as SigmaContextInterface<N, E, G>;
}
