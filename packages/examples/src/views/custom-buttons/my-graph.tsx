import React, { useEffect } from "react";

import { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";

import { useSeedRandom } from "../../core/useSeedRandom";
import { useLoadGraph } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";

export const MyGraph: React.FC = () => {
  const {faker, randomColor} = useSeedRandom();
  const { assign: assingCircular } = useLayoutCircular();
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1 });
    graph.nodes().forEach((node:string) => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: Math.max(4, Math.random() * 10),
        color: randomColor(),
        x: 0,
        y: 0,
      });
    });
    graph.edges().forEach((edge:string) => {
      graph.mergeEdgeAttributes(edge, {
        size: 1,
      });
    });
    loadGraph(graph);
    assingCircular();
  }, [assingCircular, faker.name, loadGraph, randomColor]);

  return null;
};
