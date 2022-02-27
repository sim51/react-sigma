# Setup

1. Follow all the steps from the [installation page](start-installation.md)
1. Importe the React Sigma style file in your application.
   Example : `import "@react-sigma/core/lib/assets/index.css"`
1. Create the following components into your app and check it displays correctly:

```tsx
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/assets/index.scss";

export const LoadGraph = () => {
  const graph = new Graph();
  graph.addNode("first", { size: 15, label: "My first node", color: "#FA4F40" });
  useLoadGraph(graph);
};

export const DisplayGraph = () => {
  return (
    <SigmaContainer style={{ height: "500px", width: "500px" }}>
      <LoadGraph />
    </SigmaContainer>
  );
};
```

If the graph is not displayed properly, it is most likely because you haven't followed all the prerequisites.

1. Make sure you have imported React Sigma style file
1. Make sure all dependencies are installed and using supported versions
1. Make sure your Graph container has a defined height

If you're still having trouble, you can use the [Stack Overflow](https://stackoverflow.com/questions/tagged/sigma.js).

## Note

You can also give directly the graph to the `SigmaContainer`.
But in this case at each render of the `SigmaContainer`, Sigma will be killed, recreated and the graph loaded.
In this scenario you must control the react lifecycle of its parent component, to avoid poor performances, specially with heavy graphs.

```tsx
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/assets/index.scss";

export const DisplayGraph = () => {
  const graph = new Graph();
  graph.addNode("first", { size: 15, label: "My first node", color: "#FA4F40" });
  return <SigmaContainer style={{ height: "500px", width: "500px" }} graph={graph}></SigmaContainer>;
};
```
