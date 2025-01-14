import { Attributes } from 'graphology-types';
import Sigma from 'sigma';

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
>(): Sigma<N, E, G> {
  return useSigmaContext<N, E, G>().sigma;
}
