import React, { FC } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import dracula from "prism-react-renderer/themes/dracula";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export const LiveExample: FC<{}> = () => {
  return (
    <BrowserOnly>
      {() => {
        const Graph = require("graphology");
        const {
          SigmaContainer,
          ControlsContainer,
          ZoomControl,
          SearchControl,
          FullScreenControl,
        } = require("@react-sigma/core");
        const { useLayoutCircular } = require("@react-sigma/layout-circular");
        const { useLayoutCirclepack } = require("@react-sigma/layout-circlepack");
        const { useLayoutRandom } = require("@react-sigma/layout-random");
        const {
          useLayoutNoverlap,
          useWorkerLayoutNoverlap,
          LayoutNoverlapControl,
        } = require("@react-sigma/layout-noverlap");
        const { useLayoutForce, useWorkerLayoutForce, LayoutForceControl } = require("@react-sigma/layout-force");
        const {
          useLayoutForceAtlas2,
          useWorkerLayoutForceAtlas2,
          LayoutForceAtlas2Control,
        } = require("@react-sigma/layout-forceatlas2");
        const scope = {
          Graph,
          SigmaContainer,
          ControlsContainer,
          ZoomControl,
          SearchControl,
          FullScreenControl,
          useLayoutCircular,
          useLayoutCirclepack,
          useLayoutRandom,
          useLayoutNoverlap,
          useWorkerLayoutNoverlap,
          LayoutNoverlapControl,
          useLayoutForce,
          useWorkerLayoutForce,
          LayoutForceControl,
          useLayoutForceAtlas2,
          useWorkerLayoutForceAtlas2,
          LayoutForceAtlas2Control,
        };

        const code = `function MySigmaGraph(props) {
            const RED = "#FA4F40";
            const BLUE = "#727EE0";
            const GREEN = "#5DB346";

            // Create a sample graph
            const graph = new Graph();
            graph.addNode(
              "John",
              { size: 15, label: "John", color: RED, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Mary",
              { size: 15, label: "Mary", color: RED, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Suzan",
              { size: 15, label: "Suzan", color: RED, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Nantes",
              { size: 15, label: "Nantes", color: BLUE, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "New-York",
              { size: 15, label: "New-York", color: BLUE, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Sushis",
              { size: 7, label: "Sushis", color: GREEN, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Falafels",
              { size: 7, label: "Falafels", color: GREEN, x: Math.random(), y: Math.random() }
            );
            graph.addNode(
              "Kouign Amann",
              { size: 7, label: "Kouign Amann", color: GREEN, x: Math.random(), y: Math.random() }
            );

            graph.addEdge("John", "Mary", { label: "works with", size: 5 });
            graph.addEdge("Mary", "Suzan", { label: "works with", size: 5 });
            graph.addEdge("Mary", "Nantes", { label: "lives in", size: 5 });
            graph.addEdge("John", "New-York", { label: "lives in", size: 5 });
            graph.addEdge("Suzan", "New-York", { label: "lives in", size: 5 });
            graph.addEdge("John", "Falafels", { label: "eats", size: 5 });
            graph.addEdge("Mary", "Sushis", { label: "eats", size: 5 });
            graph.addEdge("Suzan", "Kouign Amann", { label: "eats", size: 5 });

            return (
              <SigmaContainer graph={graph} style={{ height: "500px" }}>
                <ControlsContainer position={"bottom-right"}>
                  <ZoomControl />
                  <FullScreenControl />
                  <LayoutForceAtlas2Control/>
                </ControlsContainer>
                <ControlsContainer position={"top-right"}>
                  <SearchControl/>
                </ControlsContainer>
              </SigmaContainer>
            );
          }`;

        return (
          <LiveProvider theme={dracula} code={code} scope={scope}>
            <div className="row react-live">
              <div className="col col--6 live-editor" style={{ height: "500px", overflowY: "scroll" }}>
                <LiveError />
                <LiveEditor />
              </div>
              <div className="col col--6 live-preview">
                <LivePreview />
              </div>
            </div>
          </LiveProvider>
        );
      }}
    </BrowserOnly>
  );
};
