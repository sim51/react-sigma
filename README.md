# React Sigma v2 [![CI](https://github.com/sim51/react-sigma-v2/actions/workflows/test.yml/badge.svg)](https://github.com/sim51/react-sigma-v2/actions/workflows/test.yml)

A set of react components to display graphs with Sigma v2.
This project is in beta test.

You can find some online examples here : https://sim51.github.io/react-sigma-v2/examples/

## Philosophy

This library shares the same philosophy as [react-leaflet](https://react-leaflet.js.org), it just provides some bindings (and helpers) between React and Sigma.

The main component, ie. `SigmaContainer` create a Sigma instance with an empty graph. If its option `initialSettings` or `graphOptions` is updated, the instance is killed and re-created.

I recommend you to NOT UPDATE those options to avoid performance issues.
Sigma (& graphology) comes with methods that allow the user to update the settings.

Every child has access to the sigma instance (and so the graph instance) via the React context created by the `SigmaContainer`.

In your components, you can use the hook `const sigma = useSigma()` that gives you the sigma instance (and so the underlying graph with `sigma.getGraph()`)

This is an example of how to display a graph :

```javascript
// Component that creates the graph
const MyCustomGraph = () => {
  const sigma = useSigma();
  const graph = sigma.getGraph();
  graph.addNode("Jessica", { label: "Jessica", x: 1, y: 1, color: "#FF0", size: 10 });
  graph.addNode("Truman", { label: "Truman", x: 0, y: 0, color: "#00F", size: 5 });
  graph.addEdge("Jessica", "Truman", { color: "#CCC", size: 1 });
  return null;
};

// Put your component as a child of `SigmaContainer`
ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer style={{ height: "500px", width: "500px" }}>
      <MyCustomGraph />
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

## How to install

You need to install this library and its peer dependencies :

```bash
$> npm install tslib sigma graphology graphology-layout-forceatlas2 react-sigma-v2
```

## How to use it

### Import

Package is composed of a _css file_ and a _list of react components & hooks_.

For the js part, everything is export in the package entrypoint, so you can do this

```javascript
import { SigmaContainer, ...} from "react-sigma-v2";
```

For the css, you need to import the file `./lib/react-sigma-v2.css`.

```javascript
import "react-sigma-v2/lib/react-sigma-v2.css";
```

You can also import just the components you need, they are exposed under the folder `./lib/esm` :

```javascript
import { SigmaContainer, ...} from "react-sigma-v2/lib/esm/SigmaContainer";
```

## Npm scripts

- `npm run build` : Build the project
- `npm run examples` : Run the examples on <http://localhost:8080>

## Example

```javascript
import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import randomLayout from "graphology-layout/random";
import chroma from "chroma-js";
import faker from "faker";

import {
  ControlsContainer,
  ForceAtlasControl,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
  SearchControl,
  SigmaContainer,
  ZoomControl,
} from "../src/index";
import "../src/assets/index.scss";
import { Attributes, NodeKey } from "graphology-types";

interface MyCustomGraphProps {
  children?: ReactNode;
}

export const MyCustomGraph: React.FC<MyCustomGraphProps> = ({ children }) => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = (useState < NodeKey) | (null > null);

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 });
    randomLayout.assign(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: Math.max(4, Math.random() * 10),
        color: chroma.random().hex(),
      });
    });
    loadGraph(graph);

    // Register the events
    registerEvents({
      enterNode: event => setHoveredNode(event.node),
      leaveNode: () => setHoveredNode(null),
    });
  }, []);

  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };

        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode]);

  return <>{children}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <ForceAtlasControl autoRunFor={2000} />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl />
      </ControlsContainer>
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

## Some screenshots

![Complete](https://raw.githubusercontent.com/sim51/react-sigma-v2/main/test/e2e/screenshots/complete.valid.png)

![Multiple](https://raw.githubusercontent.com/sim51/react-sigma-v2/main/test/e2e/screenshots/multiple.valid.png)

## FAQ

### How I can correct the error `Error: Sigma: container has no height.` ?

This error comes from Sigma it self.
To work, Sigma requires that its _div container_ has a height.
Per default in the CSS of this project, _SigmaContainer_ is configured to take 100% (height & width) of its parent.

To resolve this issue, the easiest way is to add an _height_ on the _SigmaContainer_ like that :

```
<SigmaContainer style={{ height: "500px", width: "500px" }}>
  ...
</SigmaContainer>
```

### Is it possible to use this project with Next.js ?

This project can be used with Next.js, but only for client rendering, not for server side.
If you encounter the error `ReferenceError: window is not defined`, it's because you try to use react-sigmav2
for server and client side and obviously `window` is not define on service side.

To fix that, you have to check that you are on client side, and then do a dynamic import :

```
...

const isBrowser = () => typeof window !== "undefined"
if(isBrowser) {
  const SigmaContainer = dynamic(import("react-sigma-v2").then(mod => mod.SigmaContainer), {ssr: false});
  const MyGraph = dynamic(import("../components/graph").then(mod => mod.NetworkGraph), {ssr: false});
  return (
    <SigmaContainer>
      <MyGraph/>
    </SigmaContainer>
  )
}
else return (<p>NOT AVAILABLE</p>)
```
