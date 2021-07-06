import { useEffect, useState } from "react";
import Sigma from "sigma/sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { useSigmaContext } from "./context";
import { EventHandlers } from "./index";

/**
 * React hook to retrieve the sigma instance (from the context).
 *
 * ```typescript
 * const sigma = useSigma();
 *```
 * @category Hook
 */
export function useSigma(): Sigma {
  return useSigmaContext().sigma;
}

/**
 * React hook that helps you to load a graph.
 * If a graph was previously loaded in Sigma/Graphology, per default it is cleared.
 * You can change this behaviour by settings the parameter `clear` to false.
 *
 * ```typescript
 * const loadGraph = useLoadGraph();
 * loadGraph(erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 }), true);
 *```
 * @category Hook
 */
export function useLoadGraph(): (graph: Graph, clear?: boolean) => void {
  const sigma = useSigma();

  return (graph: Graph, clear = true) => {
    if (sigma && graph) {
      if (clear && sigma.getGraph().order > 0) sigma.getGraph().clear();
      sigma.getGraph().import(graph);
    }
  };
}

/**
 * React hook that helps you to listen Sigma’s events.
 * It handles for you all the lifecyle of listener (ie. on / remove)
 *
 * ```typescript
 * const registerEvents = useRegisterEvents();
 * registerEvents({
 *  enterNode: event => setHoveredNode(event.node),
 *  leaveNode: event => setHoveredNode(null),
 * });
 *```
 * @category Hook
 */
export function useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    let event: keyof typeof eventHandlers;

    if (!sigma || !eventHandlers) {
      return;
    }

    for (event in eventHandlers) {
      const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
      if (event === "cameraUpdated") {
        sigma.getCamera().on(event, eventHandler);
      } else {
        sigma.on(event, eventHandler);
      }
    }

    // cleanup
    return () => {
      let event: keyof typeof eventHandlers;
      for (event in eventHandlers) {
        const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
        if (event === "cameraUpdated") {
          sigma.getCamera().removeListener(event, eventHandler);
        } else {
          sigma.removeListener(event, eventHandler);
        }
      }
    };
  }, [sigma, eventHandlers]);

  return setEventHandlers;
}

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
  const sigma = useSigma();
  const [settings, setSettings] = useState<Partial<Settings>>({});

  useEffect(() => {
    if (!sigma || !settings) {
      return;
    }

    const prevSettings: Partial<Settings> = {};

    (Object.keys(settings) as Array<keyof Settings>).forEach((key) => {
      // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
      prevSettings[key] = key as never;

      sigma.setSetting(key, settings[key] as never);
    });

    // cleanup
    return () => {
      (Object.keys(prevSettings) as Array<keyof Settings>).forEach((key) => {
        // as never because of https://stackoverflow.com/questions/58656353/how-to-avoid-dynamic-keyof-object-assign-error-in-typescript
        sigma.setSetting(key, prevSettings[key] as never);
      });
    };
  }, [sigma, settings]);

  return setSettings;
}
