import { isEqual } from "lodash";
import { useCallback, useRef } from "react";
import Graph from "graphology";

import { useSigma } from "@react-sigma/core";

/**
 * Generic type for Graphology layout.
 */
interface GraphologyLayout<T> {
  (graph: Graph, options: T): { [node: string]: { [dimension: string]: number } };
  assign(graph: Graph, options: T): void;
}

/**
 * Generic type for layout hooks.
 */
export type LayoutHook<T> = (
  settings?: T,
) => {
  /**
   * Returns a positions map by node key.
   */
  positions: () => { [node: string]: { [dimension: string]: number } };
  /**
   * Assign layout node's position into the sigma graph.
   */
  assign: () => void;
};

/**
 * Factory for layout hook.
 */
export function useLayoutFactory<T>(layout: GraphologyLayout<T>, defaultSettings: T): LayoutHook<T> {
  const hook: LayoutHook<T> = (parameter: T = defaultSettings) => {
    const sigma = useSigma();
    // Default layout settings
    const settings = useRef<T>(defaultSettings);
    if (!isEqual(settings.current, parameter)) settings.current = parameter;

    const positions = useCallback(() => {
      if (settings.current) return layout(sigma.getGraph(), settings.current);
      else return {};
    }, [sigma, settings]);

    const assign = useCallback(() => {
      if (settings.current) {
        layout.assign(sigma.getGraph(), settings.current);
      }
    }, [sigma, settings]);

    return { positions, assign };
  };

  return hook;
}
