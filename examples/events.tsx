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
    loadGraph(graph);

    // Register the events
    registerEvents({
      clickNode: event => console.log("clickNode", event),
      rightClickNode: event => console.log("rightClickNode", event),
      downNode: event => console.log("downNode", event),
      enterNode: event => console.log("enterNode", event),
      leaveNode: event => console.log("leaveNode", event),
      clickStage: event => console.log("clickStage", event),
      rightClickStage: event => console.log("rightClickStage", event),
      downStage: event => console.log("downStage", event),
      click: event => console.log("click", event),
      rightClick: event => console.log("rightClick", event),
      mouseup: event => console.log("mouseup", event),
      mousedown: event => console.log("mousedown", event),
      mousemove: event => console.log("mousemove", event),
      touchup: event => console.log("touchup", event),
      touchdown: event => console.log("touchdown", event),
      touchmove: event => console.log("touchmove", event),
      kill: () => console.log("kill"),
      cameraUpdated: event => console.log("cameraUpdated", event),
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
