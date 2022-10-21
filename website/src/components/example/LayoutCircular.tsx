import React, { useEffect, useState } from "react";

import Graph from "graphology";
import { Attributes } from "graphology-types";

import { SigmaContainer, useSigma, useLoadGraph } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";

import { useSeedRandom } from "../useSeedRandom";

export const LayoutCircular: React.FC = () => {
  const RandomCircleGraph: React.FC = () => {
    const { faker, randomColor } = useSeedRandom();
    const sigma = useSigma();
    const { positions, assign } = useLayoutCircular();
    const loadGraph = useLoadGraph();

    useEffect(() => {
      const order = 100;
      const probability = 0.1;

      // Create the graph
      const graph = new Graph();
      for (let i = 0; i < order; i++) {
        graph.addNode(i, {
          label: faker.name.fullName(),
          size: faker.datatype.number({ min: 4, max: 20, precision: 1 }),
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

      loadGraph(graph);
      assign();
      console.log(positions());
    }, [assign, loadGraph, faker.datatype, faker.name, randomColor]);

    return null;
  };

  return (
    <SigmaContainer style={{ height: "500px" }}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};

export default LayoutCircular;
