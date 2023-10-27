import React, { useEffect, useState } from "react";

import Graph from "graphology";
import { Attributes } from "graphology-types";

import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";

import { useSeedRandom } from "./useSeedRandom";

export interface GraphDefaultProps {
  /**
   * Number of node to generates
   */
  order: number;
  /**
   * Probability that two nodes are linked
   */
  probability: number;
}
export const GraphDefault: React.FC<GraphDefaultProps> = ({ order, probability }) => {
  const { faker, randomColor } = useSeedRandom();
  const sigma = useSigma();
  const { assign: assignCircular } = useLayoutCircular();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
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
    assignCircular();

    // Register the events
    registerEvents({
      enterNode: (event) => setHoveredNode(event.node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [assignCircular, loadGraph, registerEvents, faker.datatype, faker.name, randomColor, order, probability]);

  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };

        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode, setSettings, sigma]);

  return null;
};
