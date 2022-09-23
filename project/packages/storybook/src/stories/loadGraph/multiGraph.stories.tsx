import { FC, useEffect } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";

export default {
  title: "Load Graph/Multi Graph",
  component: SigmaContainer,
  parameters: {
    docs: {
      description: {
        component: `
Per default, we use the default graphology constructor for the graph (see https://graphology.github.io/instantiation.html).
But you can define the type of graph that react-sigma will create by passing the constructor you want to use.

It is really necessary for example if you want to use a multi graph (ie. parallel edges).

Example :

\`\`\`
<SigmaContainer graph={MultiDirectedGraph} />
\`\`\`
        `,
      },
    },
  },
};

export const MultiGraph: FC = () => {
  const MyGraph: FC = () => {
    const loadGraph = useLoadGraph();

    useEffect(() => {
      // Create the graph
      const graph = new MultiDirectedGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
      graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });
      loadGraph(graph);
    }, [loadGraph]);

    return null;
  };

  return (
    <SigmaContainer graph={MultiDirectedGraph} style={{ width: "100%", height: "calc(100vh - 2em)" }}>
      <MyGraph />
    </SigmaContainer>
  );
};
