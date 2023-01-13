import React, { FC, useState, useEffect } from "react";
import Sigma from "sigma";
import { SigmaContainer } from "@react-sigma/core";

const ExternalState: FC = () => {
  const [sigma, setSigma] = useState<Sigma | null>(null);

  useEffect(() => {
    if (sigma) {
      // Do what ever you want with the sigma API
      const graph = sigma.getGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    }
  }, [sigma]);

  return <SigmaContainer ref={setSigma} style={{ height: "500px" }} />;
};

export default ExternalState;
