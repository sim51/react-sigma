import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import Graph from 'graphology';
import { CSSProperties, FC, useEffect } from 'react';

import { useRandom } from './common/useRandom';

const RandomCircleGraph: FC = () => {
  const { faker, randomColor } = useRandom();
  // Hook for the layout
  const { positions, assign } = useLayoutCircular();
  // Hook to load the graph
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create a random graph
    const order = 100;
    const probability = 0.1;
    const graph = new Graph();
    for (let i = 0; i < order; i++) {
      graph.addNode(i, {
        label: faker.person.fullName(),
        size: faker.number.int({ min: 4, max: 20 }),
        color: randomColor(),
        x: 0,
        y: 0,
      });
    }
    for (let i = 0; i < order; i++) {
      for (let j = i + 1; j < order; j++) {
        if (Math.random() < probability) graph.addDirectedEdge(i, j);
        if (Math.random() < probability) graph.addDirectedEdge(j, i);
      }
    }

    // Load the graph in sigma
    loadGraph(graph);
    // Apply the layout
    assign();
    // Display in the console the node's position for the layout
    // eslint-disable-next-line no-console
    console.log(positions());
  }, [assign, loadGraph, faker.datatype, faker, randomColor, positions]);

  return null;
};

export const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};
