# React Sigma - core module

A set of react components to display graphs with Sigma.js.

Visit our website for docs and examples : https://sim51.github.io/react-sigma/

## Documentation

- [Getting started](https://sim51.github.io/react-sigma/docs/start-introduction)
- [API reference](https://sim51.github.io/react-sigma/docs/api)
- [Live example](https://sim51.github.io/react-sigma/docs/example)

## How to use it

1. Install the library

```bash
npm install @react-sigma/core
```

2. Import the React Sigma style file in your application.
   Example : `import "@react-sigma/core/lib/react-sigma.min.css"`

3. Create the following components into your app and check it displays correctly:

```tsx
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

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
