import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph } from 'graphology';
import { CSSProperties, FC } from 'react';

export const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode('A', { x: 0, y: 0, label: 'Node A', size: 10 });
  graph.addNode('B', { x: 1, y: 1, label: 'Node B', size: 10 });
  graph.addEdgeWithKey('rel1', 'A', 'B', { label: 'REL_1' });

  return <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }}></SigmaContainer>;
};
