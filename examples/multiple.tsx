import "./random";
import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import circularLayout from "graphology-layout/circular";
import chroma from "chroma-js";
import faker from "faker";
import {
  ControlsContainer,
  ForceAtlasControl,
  FullScreenControl,
  useLoadGraph,
  SigmaContainer,
  ZoomControl,
} from "../src/index";
import "../src/assets/index.scss";

interface MyCustomGraphProps {
  children?: ReactNode;
}

export const MyCustomGraph: React.FC<MyCustomGraphProps> = ({ children }) => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1 });
    circularLayout.assign(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: Math.max(4, Math.random() * 10),
        color: chroma.random().hex(),
      });
    });
    loadGraph(graph);
  }, []);

  return <>{children}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyCustomGraph />
      <ControlsContainer position={"top-left"}>
        <ZoomControl />
        <FullScreenControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
    </SigmaContainer>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyCustomGraph />
      <ControlsContainer position={"top-right"}>
        <ZoomControl />
        <FullScreenControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
    </SigmaContainer>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-left"}>
        <ZoomControl />
        <FullScreenControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
    </SigmaContainer>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
