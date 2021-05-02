import React, { useEffect } from "react";
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
  SigmaContainer,
  ZoomControl,
} from "../src/index";
import "../src/assets/index.scss";

export const MyCustomGraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();

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
      enterNode: event => {
        const graph = sigma.getGraph();
        graph.updateEachNodeAttributes((node, attr) => {
          return { ...attr, background: true, highlighted: false };
        });
        graph.setNodeAttribute(event.node, "background", false);
        graph.setNodeAttribute(event.node, "highlighted", true);
        graph.setNodeAttribute(event.node, "selected", true);
        graph.forEachNeighbor(event.node, (node, data) => {
          graph.setNodeAttribute(node, "background", false);
          graph.setNodeAttribute(node, "highlighted", true);
        });
        sigma.refresh();
      },
      leaveNode: event => {
        const graph = sigma.getGraph();
        graph.updateEachNodeAttributes((node, attr) => {
          attr.highlighted = false;
          attr.background = false;
          attr.selected = false;
          return attr;
        });
        sigma.refresh();
      },
    });

    setSettings({
      nodeReducer: (node, data) => {
        if (data.background) return { ...data, color: "#eee", label: "" };
        return data;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const nodes = graph.extremities(edge).map(node => graph.getNodeAttributes(node));
        if (nodes && (nodes[0].background || nodes[1].background)) return { ...data, hidden: true };
        if (nodes && (nodes[0].selected || nodes[1].selected)) return { ...data, color: "#000", hidden: false };
        return { ...data, color: "#aaa", hidden: false };
      },
    });
  }, []);

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
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
