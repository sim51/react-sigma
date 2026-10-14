import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph as MultiGraphConstructor } from 'graphology';
import { CSSProperties, FC, useEffect } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { extremityArrow, layerPlain, pathCurved, pathLine, pathLoop } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import { useRandom } from './common/useRandom';

type NodeType = {
  x: number;
  y: number;
  label: string;
  size: number;
  color: string;
};
type EdgeType = {
  type?: string;
  label?: string;
  size?: number;
  curvature?: number;
  parallelIndex?: number;
  parallelMaxIndex?: number;
};

const MyGraph: React.FC = () => {
  const { faker, randomColor } = useRandom();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();

  useEffect(() => {
    // Create the graph
    const graph = new MultiGraphConstructor<NodeType, EdgeType>();

    graph.addNode('a', {
      x: 0,
      y: 0,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('b', {
      x: 1,
      y: -1,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('c', {
      x: 3,
      y: -2,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('d', {
      x: 1,
      y: -3,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('e', {
      x: 3,
      y: -4,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('f', {
      x: 4,
      y: -5,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });

    graph.addEdge('a', 'b', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('b', 'c', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('b', 'd', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('c', 'b', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('c', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'c', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('e', 'd', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('e', 'f', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('f', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('f', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });

    // load the graph in sigma
    loadGraph(graph);
  }, [loadGraph, faker, randomColor]);

  return null;
};

const sigmaOptions: SigmaOptions<NodeType, EdgeType> = {
  primitives: {
    edges: {
      paths: [pathLine(), pathCurved(), pathLoop()],
      extremities: [extremityArrow()],
      layers: [layerPlain()],
    },
  },
  styles: {
    nodes: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.nodes as any,
      {
        color: { attribute: 'color' },
        size: { attribute: 'size' },
      },
    ],
    edges: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.edges as any,
      {
        color: { attribute: 'color' },
        size: { attribute: 'size' },
        path: 'straight',
        selfLoopPath: 'loop',
        parallelPath: 'curved',
        head: { attribute: 'head', defaultValue: 'arrow' },
      },
    ],
  },
  settings: {
    autoRescale: true,
  },
};
export const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} options={sigmaOptions}>
    <MyGraph />
  </SigmaContainer>
);
