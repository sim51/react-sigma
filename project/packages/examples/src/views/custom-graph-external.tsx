import { FC, useEffect, useState } from "react";

import Sigma from "sigma";
import { SigmaContainer } from "@react-sigma/core";
import Graph from "graphology";

interface CustomAttributes {
  x: number;
  y: number;
  label: string;
  size: number;
}

class CustomGraph extends Graph<CustomAttributes> {}

export const CustomGraphExternalView: FC = () => {
  const [sigma, setSigma] = useState<Sigma<CustomGraph> | null>(null);

  useEffect(() => {
    if (sigma) {
      const graph = sigma.getGraph();
      graph.addNode("A", { x: 1, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 0, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    }
  }, [sigma]);

  return <SigmaContainer graph={CustomGraph} ref={setSigma} settings={{ renderLabels: false }} />;
};
