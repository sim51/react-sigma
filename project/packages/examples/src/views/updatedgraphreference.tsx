import { FC, useEffect, useMemo, useState } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer } from "@react-sigma/core";

function getGraph() {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
  graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });
  return graph;
}

export const UpdatedGraphReferenceView: FC = () => {
  const [graph, setGraph] = useState<MultiDirectedGraph>(getGraph());
  const settings = useMemo(() => ({ renderLabels: false }), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(getGraph());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <SigmaContainer graph={graph} settings={settings} />;
};
