# React Sigma v2

A set of react components to display graphs with Sigma v2.
This project is in beta test.

Some online examples :

- https://sim51.github.io/react-sigma-v2/examples/complete.html
- https://sim51.github.io/react-sigma-v2/examples/multiple.html

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
    <SigmaContainer>
      <MyCustomGraph />
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

## How to install

The package is not yet on npm, so you have to install it directly from the repository. Moreover, you have to install the peer dependencies that you need.

So if you want to install the full package, this is the command line :

```bash
$> npm install sigma graphology graphology-layout-forceatlas2 react-sigma-v2
```

<div class="important">
This package is based on the version of SigmaV2 `2.0.0-beta3` that has introduced new features. So be sure to have this version or an upper one.
</div>

## How to use it

### Import

Package is composed of a css file and a list of react components & hooks.

For the js part, everything is export in the package entrypoint, so you can do this

```javascript
import { SigmaContainer, ...} from "react-sigma-v2";
```

You can also import just the components you need, they are exposed under the folder `./lib/esm` :

```javascript
import { SigmaContainer, ...} from "react-sigma-v2/lib/esm/SigmaContainer";
```

For the css, you need to import the file `./lib/react-sigma-v2.css`.

## Npm scripts

- `npm run build` : Build the project
- `npm run examples` : Run the examples on <http://localhost:8080>

## Example

```javascript
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import { NodeKey, EdgeKey } from "graphology-types";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import randomLayout from "graphology-layout/random";
import chroma from "chroma-js";
import faker from "faker";
import { Sigma } from "sigma/sigma";
import { Settings } from "sigma/settings";
import {
  ControlsContainer,
  EventHandlers,
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

export const MyCustomGraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = (useState < string) | (null > null);

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
      leaveNode: event => setHoveredNode(null),
    });
  }, []);

  useEffect(() => {
    setSettings({
      nodeReducer: (node: any, data: any) => {
        const graph = sigma.getGraph();
        const newData = { ...data, highlighted: data.highlighted || false };
        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) newData.highlighted = true;
          else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge: any, data: any) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };
        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) newData.hidden = true;
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

## Components

### SigmaContainer

This is the component’s properties definition :

```typescript
interface SigmaContainerProps {
  graphOptions?: GraphOptions;
  initialSettings?: Settings;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
```

- `graphOptions` is the options passed to the Graphology constructor. It defines the type of the graph, see <https://graphology.github.io/instantiation.html#options>
- `initialSettings` is the settings passed to the Sigma constructor.

### ControlsContainer

It’s just a component wrapper that create a `div` with the adequate class, so we know where to display the controls.
The only (optional) property of this component is : `position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";`
Default value is `bottom-right`.

### ZoomControl

Create the zoom toolbar fir the graph. There is three controllers : `zoom in`, `zoom out` & `see the whole graph`

### ForceAtlasControl

This is the component’s properties definition :

```typescript
interface Props {
  /**
   * The FA2 worker settings.
   */
  settings?: FA2LayoutSupervisorParameters;
  /**
   * Option to tell what we do when the component is mounted
   *  - <code>-1</code> means that we do nothing (it's the same as no value)
   *  - <code>0</code> means that we start the algo (and don't auto stop it)
   *  - <code>X</code> mans that we start the algo, and stop it after X milliseconds
   */
  autoRunFor?: number;
}
```

The component creates an a action button to stop/start a forceatlas2 layout on the graph. Moreover, if you define the option `autoRunFor`, the layout will be run on component mount.

## Hooks

- `useSigma(): Sigma` : This is the main hook that give you access to the sigma instance.

- `useLoadGraph(): (graph: Graph, clear?: boolean) => void` : It’s an helper that allow you to load a graph into the sigma instance. It’s pretty much a `sigma.getGraph().import(graph)`

- `useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void`: It’s an helper that allow you to listen Sigma’s events.

- `useSetSettings(): (settings: Partial<Settings>) => void` : It’s an helper that allow you to change the Sigma’s settings.
