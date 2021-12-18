import { rng, renderLabels } from "./utils/random";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { UndirectedGraph } from "graphology";
import { Attributes } from "graphology-types";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import chroma from "chroma-js";
import faker from "faker";
import { animateNodes } from "sigma/utils/animate";

import {
  ControlsContainer,
  WorkerLayoutControl,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
  useLayoutCircular,
  useLayoutCirclepack,
  useLayoutRandom,
  useLayoutForceAtlas2,
  useLayoutForceDirected,
  useLayoutNoverlap,
  useWorkerLayoutForceAtlas2,
  useWorkerLayoutForceDirected,
  useWorkerLayoutNoverlap,
  SearchControl,
  SigmaContainer,
  ZoomControl,
} from "../src/index";
import "../src/assets/index.scss";

export const MyCustomGraph: React.FC = () => {
  const sigma = useSigma();
  const { assign: assingCircular } = useLayoutCircular({});
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1, rng });
    assingCircular(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: faker.datatype.number({ min: 4, max: 20, precision: 1 }),
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
      renderLabels: renderLabels,
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

  return null;
};

export const LayoutsControl: React.FC = () => {
  const sigma = useSigma();
  const [layout, setLayout] = useState<string>("forceAtlas");
  const [opened, setOpened] = useState<boolean>(false);
  const layouts: { [key: string]: { layout: any; worker?: any } } = {
    circular: {
      layout: useLayoutCircular(),
    },
    circlepack: {
      layout: useLayoutCirclepack(),
    },
    random: {
      layout: useLayoutRandom(),
    },
    noverlaps: {
      layout: useLayoutNoverlap(),
      worker: useWorkerLayoutNoverlap,
    },
    forceDirected: {
      layout: useLayoutForceDirected({ maxIterations: 100 }),
      worker: useWorkerLayoutForceDirected,
    },
    forceAtlas: {
      layout: useLayoutForceAtlas2({ iterations: 100 }),
      worker: useWorkerLayoutForceAtlas2,
    },
  };

  useEffect(() => {
    const { positions } = layouts[layout].layout;
    animateNodes(sigma.getGraph(), positions(), { duration: 1000 });
  }, [layout]);

  useEffect(() => {
    const close = () => setOpened(false);
    if (opened === true) {
      document.addEventListener("click", close);
    }
    return () => document.removeEventListener("click", close);
  }, [opened]);

  return (
    <>
      <div>
        {layouts[layout] && layouts[layout].worker && (
          <WorkerLayoutControl layout={layouts[layout].worker} settings={{}} />
        )}
      </div>
      <div>
        <div className="react-sigma-control-layout">
          <button onClick={() => setOpened((e: boolean) => !e)}>
            <FaProjectDiagram />
          </button>
          {opened === true && (
            <ul
              style={{
                position: "absolute",
                bottom: 0,
                right: "35px",
                backgroundColor: "#e7e9ed",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              {Object.keys(layouts).map(name => {
                return (
                  <li key={name}>
                    <button
                      style={{ fontWeight: layout === name ? "bold" : "normal" }}
                      onClick={() => {
                        setLayout(name);
                      }}
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
