import { FC, useEffect, useMemo } from "react";
import Graph, { MultiDirectedGraph } from "graphology";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";

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

const MyGraph: React.FC = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph: MyGraphType = new MultiDirectedGraph();
    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export const MultiDirectedGraphView: FC = () => {
  const settings = useMemo(() => ({ renderEdgeLabels: true }), []);

  return (
    <SigmaContainer<MyGraphType> settings={settings}>
      <MyGraph />
    </SigmaContainer>
  );
};
