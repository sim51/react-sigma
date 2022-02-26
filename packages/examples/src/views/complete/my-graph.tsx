import React, { useEffect, useState } from "react";

import { UndirectedGraph } from "graphology";
import { Attributes } from "graphology-types";
import erdosRenyi from "graphology-generators/random/erdos-renyi";

import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { useSeedRandom } from "../../core/useSeedRandom";

export const MyGraph: React.FC = () => {
  const {faker, randomColor} = useSeedRandom();
  const sigma = useSigma();
  const { assign: assingCircular } = useLayoutCircular();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1 });
    graph.nodes().forEach((node:string) => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: faker.datatype.number({ min: 4, max: 20, precision: 1 }),
        color: randomColor(),
        x: 0,
        y: 0,
      });
    });
    loadGraph(graph);
    assingCircular();

    // Register the events
    registerEvents({
      enterNode: event => setHoveredNode(event.node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [assingCircular, loadGraph, registerEvents, faker.datatype, faker.name, randomColor]);

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
