import { FC, useEffect, useMemo, useState } from "react";
import Graph from "graphology";
import Sigma from "sigma";

import { SigmaContainer } from "@react-sigma/core";

type MyGraphType = Graph<
  {
    x: number;
    y: number;
    label: string;
    size: number;
  },
  {
    label: string;
  }
>;

export const ExternalView: FC = () => {
  const [sigma, setSigma] = useState<Sigma<MyGraphType> | null>(null);
  const settings = useMemo(() => ({ renderLabels: false }), []);

  useEffect(() => {
    if (sigma) {
      const graph = sigma.getGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    }
  }, [sigma]);

  return <SigmaContainer ref={setSigma} settings={settings} />;
};
