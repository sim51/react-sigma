# Introduction

## Concept

React Sigma is strongly inspired by [react-leaflet](https://react-leaflet.js.org), even the documentation.

It just provides some bindings (and helpers) between [React](https://reactjs.org/) and [Sigma](https://www.sigmajs.org/).

The main component, ie. `SigmaContainer`, creates a Sigma instance with the provided settings and graph.

If its properties `settings` or `graph` are updated, the instance is killed and re-created (but its camera state is restored).

I recommend you to **NOT UPDATE** those options to avoid performance issues, and to use a constant outside react component ( or use a `useMemo`).
[Sigma](https://www.sigmajs.org/) Sigma (and [graphology](https://graphology.github.io/)) comes with methods that allow you to update graph but also settings.
So you should treat it as an **immutable component**.

## React context

React sigma uses [react's context API](https://reactjs.org/docs/context.html) to share the sigma instance with the `SigmaContainer`'s children.

Each Sigma instance has its own context, so you can create multiple graph in a page.

In your components, you can use the hook `useSigma()` that gives you the sigma instance, and so the underlying graph with `sigma.getGraph()`.

## Lifecycle

1. The `SigmaContainer` renders a DOM structure that contains a `<div className="sigma-container">` element.
1. The `SigmaContainer` instantiates [Sigma](https://www.sigmajs.org/) for the created `<div>` and create a React context where the instance is stored.
1. The `SigmaContainer` renders its children components.
1. Each child has access to the sigma instance via the shared context, so they can manipulate it (and its underlying graph)

**IMPORTANT:** If you change properties on the `SigmaContainer`, the component will be rendered again as well as all its children. So the sigma instance will be killed and recreated (but its camera state is restored).

## Modules

React sigma is composed of multiple modules.

The core one (ie. `@react-sigma/core`), is the main that contains all the component to control the lifecycle between React & Sigma.

The other modules manage graph layouts, like `@react-sigma/layout-forceatlas2`.

With this architecture, you can control which graph layout you want to use without to increase the size of your bundle.
