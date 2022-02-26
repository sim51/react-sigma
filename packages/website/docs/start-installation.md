# Installation

## Prerequisites

### React

This documentation assumes you are already familiar with [React](https://reactjs.org/) and have a project setup. If it is not the case, you should read [React's Getting Started documentation](https://reactjs.org/docs/getting-started.html) first.

### Sigma

This documentation assumes you are already familiar with [Sigma](https://www.sigmajs.org/).
It **is not a replacement** for [Sigma's documentation](https://www.sigmajs.org/).

## Peer dependencies

`Sigma` and `graphology` are required peer dependencies.

## With NPM

With npm v7 and higher, peer dependencies are automatically installed, so you can install React Sigma with :

```bash
npm install @react-sigma/core
```

If you have a NPM version prior to v7, you must install peer dependencies by yourself :

```bash
npm install @react-sigma/core sigma graphology
```

## With yarn

Yarn automatically installs peer depdencies, so you can install React Sigma with :

```bash
yarn install @react-sigma/core
```

## Typescript

React Sigma is written in Typescript, so types definition are natively provided by the library.
