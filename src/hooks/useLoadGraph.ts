import { useCallback } from "react";
import Graph from "graphology";

import { useSigma } from "./useSigma";

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

  return useCallback(
    (graph: Graph, clear = true) => {
      if (sigma && graph) {
        if (clear && sigma.getGraph().order > 0) sigma.getGraph().clear();
        sigma.getGraph().import(graph);
        sigma.refresh();
      }
    },
    [sigma],
  );
}
