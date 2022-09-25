import React, { FC } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer } from "@react-sigma/core";

const LoadGraphWithByProp: FC = () => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });

  return <SigmaContainer style={{ height: "500px" }} graph={graph}></SigmaContainer>;
};

export default LoadGraphWithByProp;
