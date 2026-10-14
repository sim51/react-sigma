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
export function useSetSettings(): (newSettings: Partial<Settings>) => void {
  const { sigma } = useSigmaContext();

  const setSettings = useCallback(
    (newSettings: Partial<Settings>) => {
      if (!sigma) return;
      (Object.keys(newSettings) as Array<keyof Settings>).forEach((key) => {
        // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
        sigma.setSetting(key, newSettings[key] as never);
      });
    },
    [sigma],
  );

  return setSettings;
}
