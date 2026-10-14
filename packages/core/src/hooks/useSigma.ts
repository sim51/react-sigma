import { Attributes } from 'graphology-types';
import Sigma from 'sigma';
import { PrimitivesDeclaration } from 'sigma/types';

import { useSigmaContext } from './context';

/**
 * React hook to retrieve the sigma instance (from the context).
 *
 * ```typescript
 * const sigma = useSigma();
 *```
 * @category Hook
 */
export function useSigma<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
  NS = unknown,
  ES = unknown,
  GS = unknown,
  P extends PrimitivesDeclaration = PrimitivesDeclaration,
>(): Sigma<N, E, G, NS, ES, GS, P> {
  return useSigmaContext<N, E, G, NS, ES, GS, P>().sigma;
}
