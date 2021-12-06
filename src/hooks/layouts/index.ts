import { isEqual } from "lodash";
import { useCallback, useRef } from "react";
import Graph from "graphology";
import { animateNodes, AnimateOptions } from "sigma/utils/animate";

import { useSigma } from "../useSigma";

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
  settings: T,
) => {
  /**
   * Assign layout node's position into the specified graph if present,
   * or in the sigma graph if not present.
   */
  assign: (graph?: Graph) => void;
  /**
   * Create a smooth transition between the actual node's position of the sigma graph,
   * and the one computed by the layout.
   */
  animate: (options?: Partial<AnimateOptions>) => void;
};

/**
 * Factory for layout hook.
 */
export function useLayoutFactory<T>(layout: GraphologyLayout<T>): LayoutHook<T> {
  const hook: LayoutHook<T> = (parameter: T) => {
    const sigma = useSigma();

    // Default layout settings
    const settings = useRef<T>();
    if (!isEqual(settings.current, parameter)) settings.current = parameter;

    const assign = useCallback(
      (graph?: Graph) => {
        if (settings.current) {
          layout.assign(graph ? graph : sigma.getGraph(), settings.current);
        }
      },
      [sigma, settings],
    );

    const animate = useCallback(
      (options: Partial<AnimateOptions> = {}) => {
        if (settings.current) {
          const positions = layout(sigma.getGraph(), settings.current);
          animateNodes(sigma.getGraph(), positions, options);
        }
      },
      [sigma, settings],
    );

    return { assign, animate };
  };
  return hook;
}
