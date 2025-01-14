import { Attributes } from 'graphology-types';
import { useCallback } from 'react';
import { Settings } from 'sigma/settings';

import { useSigmaContext } from './context';

/**
 * React hook that helps you to update Sigma’s settings.
 *
 * ```typescript
 * const setSettings = useSetSettings();
 * ...
 * useEffect(() => {
 *  setSettings({
 *    hideEdgesOnMove: true,
 *    hideLabelsOnMove: true,
 *  });
 * }, []);
 *```
 * @category Hook
 */
export function useSetSettings<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
>(): (newSettings: Partial<Settings<N, E, G>>) => void {
  const { sigma } = useSigmaContext<N, E, G>();

  const setSettings = useCallback(
    (newSettings: Partial<Settings<N, E, G>>) => {
      if (!sigma) return;
      (Object.keys(newSettings) as Array<keyof Settings<N, E, G>>).forEach((key) => {
        // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
        sigma.setSetting(key, newSettings[key] as never);
      });
    },
    [sigma],
  );

  return setSettings;
}
