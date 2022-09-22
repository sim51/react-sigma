import { useEffect, useState } from "react";
import { Settings } from "sigma/settings";

import { useSigmaContext } from "./context";

/**
 * React hook that helps you to update Sigma’s settings.
 *
 * ```typescript
 * const setSettings = useSetSettings();
 * setSettings({
 *  hideEdgesOnMove: true,
 *  hideLabelsOnMove: true,
 * });
 *```
 * @category Hook
 */
export function useSetSettings(): (newSettings: Partial<Settings>) => void {
  const { sigma, container } = useSigmaContext();
  const [settings, setSettings] = useState<Partial<Settings>>({});

  useEffect(() => {
    if (!sigma || !settings) {
      return;
    }

    const prevSettings: Partial<Settings> = {};

    (Object.keys(settings) as Array<keyof Settings>).forEach(key => {
      // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
      prevSettings[key] = settings[key] as never;
      sigma.setSetting(key, settings[key] as never);
    });

    // cleanup
    return () => {
      if (sigma && container && container.offsetWidth > 0 && container.offsetHeight > 0) {
        (Object.keys(prevSettings) as Array<keyof Settings>).forEach(key => {
          // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
          sigma.setSetting(key, prevSettings[key] as never);
        });
      }
    };
  }, [sigma, settings, container]);

  return setSettings;
}
