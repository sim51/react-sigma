import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import { NodeKey, EdgeKey } from "graphology-types";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import randomLayout from "graphology-layout/random";
import chroma from "chroma-js";
import faker from "faker";
import { Sigma } from "sigma/sigma";
import { Settings } from "sigma/settings";
import {
  ControlsContainer,
  EventHandlers,
  ForceAtlasControl,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
  SearchControl,
  SigmaContainer,
  ZoomControl,
} from "../src/index";
import "../src/assets/index.scss";

export const MyCustomGraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 });
    randomLayout.assign(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: Math.max(4, Math.random() * 10),
        color: chroma.random().hex(),
      });
    });
    loadGraph(graph);

    // Register the events
    registerEvents({
      enterNode: event => setHoveredNode(event.node),
      leaveNode: event => setHoveredNode(null),
    });
  }, []);

  useEffect(() => {
    setSettings({
      nodeReducer: (node: any, data: any) => {
        const graph = sigma.getGraph();
        const newData = { ...data, highlighted: data.highlighted || false };
        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) newData.highlighted = true;
          else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge: any, data: any) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };
        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) newData.hidden = true;
        return newData;
      },
    });
  }, [hoveredNode]);

  return <>{children}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl />
      </ControlsContainer>
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
