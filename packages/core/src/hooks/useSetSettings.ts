import { useEffect, useState } from "react";
import { Settings } from "sigma/settings";

import { useSigmaContext } from "./context";
import { Attributes } from "graphology-types";

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
  const { sigma, container } = useSigmaContext<N, E, G>();
  const [settings, setSettings] = useState<Partial<Settings<N, E, G>>>({});

  useEffect(() => {
    if (!sigma || !settings) {
      return;
    }

    const prevSettings: Partial<Settings<N, E, G>> = {};

    (Object.keys(settings) as Array<keyof Settings<N, E, G>>).forEach((key) => {
      // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
      prevSettings[key] = settings[key] as never;
      sigma.setSetting(key, settings[key] as never);
    });

    // cleanup
    return () => {
      if (sigma && container && container.offsetWidth > 0 && container.offsetHeight > 0) {
        (Object.keys(prevSettings) as Array<keyof Settings<N, E, G>>).forEach((key) => {
          // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
          sigma.setSetting(key, prevSettings[key] as never);
        });
      }
    };
  }, [sigma, settings, container]);

  return setSettings;
}
