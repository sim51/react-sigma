import { useLoadGraph } from '@react-sigma/core';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import { FC, useEffect } from 'react';

import { EdgeType, NodeType, useRandom } from './useRandom';

export const SampleGraph: FC = () => {
  const { randomGraph } = useRandom();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();
  const { assign: assignCircular } = useLayoutCircular({ scale: 100 });

  /**
   * When component mount
   * => load the graph
   */
  useEffect(() => {
    // Create & load the graph
    const graph = randomGraph();
    loadGraph(graph);
    assignCircular();
  }, [assignCircular, loadGraph, randomGraph]);

  return null;
};
