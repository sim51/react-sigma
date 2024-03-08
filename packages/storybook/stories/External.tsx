import { FC, useEffect, useMemo, useState, CSSProperties } from "react";
import Sigma from "sigma";

import { SigmaContainer } from "@react-sigma/core";

import "@react-sigma/core/lib/react-sigma.min.css";

type NodeType = { x: number; y: number; label: string; size: number };
type EdgeType = { label: string };

export const External: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Storing the sigma ref provided by react-sigma
  const [sigma, setSigma] = useState<Sigma<NodeType, EdgeType> | null>(null);
  // Memo sigma settings to avoid re-render sigma at each component render
  const settings = useMemo(() => ({ allowInvalidContainer: true, renderLabels: false }), []);

  // When the sigma ref is populated
  // => load a graph
  useEffect(() => {
    if (sigma) {
      const graph = sigma.getGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    }
  }, [sigma]);

  return <SigmaContainer ref={setSigma} settings={settings} style={style} />;
};
