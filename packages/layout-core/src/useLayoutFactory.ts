import { isEqual, useSigma } from '@react-sigma/core';
import Graph from 'graphology';
import { useCallback, useRef } from 'react';

/**
 * Generic type for Graphology layout.
 */
export interface GraphologyLayout<T> {
  (graph: Graph, options: T): { [node: string]: { [dimension: string]: number } };
  assign(graph: Graph, options: T): void;
}

/**
 * Generic type for layout hooks.
 */
export type LayoutHook = {
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
export function useLayoutFactory<T>(layout: GraphologyLayout<T>, parameter: T): LayoutHook {
  const sigma = useSigma();

  // Default layout settings
  const settings = useRef<T>(parameter);
  if (!isEqual(settings.current, parameter)) settings.current = parameter;

  const positions = useCallback(() => {
    if (settings.current) return layout(sigma.getGraph(), settings.current);
    else return {};
  }, [sigma, settings, layout]);

  const assign = useCallback(() => {
    if (settings.current) {
      layout.assign(sigma.getGraph(), settings.current);
    }
  }, [sigma, settings, layout]);

  return { positions, assign };
}
