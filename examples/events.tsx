import { rng } from "./utils/random";
import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import circularLayout from "graphology-layout/circular";
import chroma from "chroma-js";
import faker from "faker";

import { SigmaContainer, useRegisterEvents, useLoadGraph } from "../src/index";
import "../src/assets/index.scss";

interface MyCustomGraphProps {
  children?: ReactNode;
}

export const MyCustomGraph: React.FC<MyCustomGraphProps> = ({ children }) => {
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1, rng });
    circularLayout.assign(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: Math.max(4, Math.random() * 10),
        color: chroma.random().hex(),
      });
    });
    graph.edges().forEach(edge => {
      graph.mergeEdgeAttributes(edge, {
        size: 1,
      });
    });
    loadGraph(graph);

    // Register the events
    registerEvents({
      // node events
      clickNode: event => console.log("clickNode", event.event, event.node, event.preventSigmaDefault),
      doubleClickNode: event => console.log("doubleClickNode", event.event, event.node, event.preventSigmaDefault),
      rightClickNode: event => console.log("rightClickNode", event.event, event.node, event.preventSigmaDefault),
      wheelNode: event => console.log("wheelNode", event.event, event.node, event.preventSigmaDefault),
      downNode: event => console.log("downNode", event.event, event.node, event.preventSigmaDefault),
      enterNode: event => console.log("enterNode", event.node),
      leaveNode: event => console.log("leaveNode", event.node),
      // edge events
      clickEdge: event => console.log("clickEdge", event.event, event.edge, event.preventSigmaDefault),
      doubleClickEdge: event => console.log("doubleClickEdge", event.event, event.edge, event.preventSigmaDefault),
      rightClickEdge: event => console.log("rightClickEdge", event.event, event.edge, event.preventSigmaDefault),
      wheelEdge: event => console.log("wheelEdge", event.event, event.edge, event.preventSigmaDefault),
      downEdge: event => console.log("downEdge", event.event, event.edge, event.preventSigmaDefault),
      enterEdge: event => console.log("enterEdge", event.edge),
      leaveEdge: event => console.log("leaveEdge", event.edge),
      // stage events
      clickStage: event => console.log("clickStage", event.event, event.preventSigmaDefault),
      doubleClickStage: event => console.log("doubleClickStage", event.event, event.preventSigmaDefault),
      rightClickStage: event => console.log("rightClickStage", event.event, event.preventSigmaDefault),
      wheelStage: event => console.log("wheelStage", event.event, event.preventSigmaDefault),
      downStage: event => console.log("downStage", event.event, event.preventSigmaDefault),
      // default mouse events
      click: event => console.log("click", event.x, event.y),
      doubleClick: event => console.log("doubleClick", event.x, event.y),
      wheel: event => console.log("wheel", event.x, event.y, event.delta),
      rightClick: event => console.log("rightClick", event.x, event.y),
      mouseup: event => console.log("mouseup", event.x, event.y),
      mousedown: event => console.log("mousedown", event.x, event.y),
      mousemove: event => console.log("mousemove", event.x, event.y),
      // default touch events
      touchup: event => console.log("touchup", event.touches),
      touchdown: event => console.log("touchdown", event.touches),
      touchmove: event => console.log("touchmove", event.touches),
      // sigma kill
      kill: () => console.log("kill"),
      // sigma camera update
      cameraUpdated: event => console.log("cameraUpdated", event.x, event.y, event.angle, event.ratio),
    });
  }, []);

  return <>{children}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer>
      <MyCustomGraph />
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
