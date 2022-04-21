# Setup

1. Follow all the steps from the [installation page](start-installation.md)
2. Import the React Sigma style file in your application.
   Depending on your React app setup, the way to import a CSS file might differ.
   Here is an example with "create react app" setup : `import "@react-sigma/core/lib/react-sigma.min.css"`

3. Create the following components into your app and check it displays correctly:

```tsx
import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export const DisplayGraph = () => {
  return (
    <SigmaContainer style={{ height: "500px", width: "500px" }}>
      <LoadGraph />
    </SigmaContainer>
  );
};
```

You can take a look at this [code sandbox](https://githubbox.com/sim51/react-sigma/tree/main/packages/examples) to see a working example.

If the graph is not displayed properly, it is most likely because you haven't followed all the prerequisites.

1. Make sure you have imported React Sigma style file
1. Make sure all dependencies are installed and using supported versions
1. Make sure your Graph container has a defined height

If you're still having trouble, you can use the [Stack Overflow](https://stackoverflow.com/questions/tagged/sigma.js).

# The `graph` property on `SigmaContainer`

`SigmaContainer` takes an optional property `graph`.
This property can be either a **graphology instance**, or a **graph constructor**

## Graph Constructor

The library creates for you a default graph instance for graphology.
Per default on graphology, a graph is :

- **mixed** (ie undirected & directed)
- with self-loop
- **without** multi-edges

If you need a different graph definition, you have to pass to the `SigmaContainer` component,
the good [graphology constructor](https://graphology.github.io/instantiation.html#typed-constructors)

Example :

```ts
import { FC, useEffect } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";

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

export const MultiDirectedGraphView: FC = () => {
  return (
    <SigmaContainer graph={MultiDirectedGraph}>
      <MyGraph />
    </SigmaContainer>
  );
};
```

## Graph instance

You can directly pass a graph instance to the `SigmaContainer`, but in this case at each render of the component, Sigma will be killed, recreated and the graph loaded.

In this scenario you must control the react lifecycle of its parent component, to avoid poor performances, specially with heavy graphs.

Examples :

```ts
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const DisplayGraph = () => {
  const graph = new Graph();
  graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });
  return <SigmaContainer style={{ height: "500px", width: "500px" }} graph={graph}></SigmaContainer>;
};
```
