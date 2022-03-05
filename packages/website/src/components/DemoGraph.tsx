import React, { FC } from "react";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";

export const DemoGraph: FC<{}> = () => {
  return (
    <BrowserOnly>
      {() => {
        //imports
        const Graph = require("graphology");
        const getNodeProgramImage = require("sigma/rendering/webgl/programs/node.image").default;
        const {
          SigmaContainer,
          ControlsContainer,
          ZoomControl,
          FullScreenControl,
          SearchControl,
        } = require("@react-sigma/core");
        const { LayoutForceAtlas2Control } = require("@react-sigma/layout-forceatlas2");
        const jsonGraph = require("../../static/demo/dataset.json");

        const graph = Graph.from(jsonGraph);
        return (
          <SigmaContainer
            graph={graph}
            style={{ height: "500px" }}
            initialSettings={{
              nodeProgramClasses: { image: getNodeProgramImage() },
              defaultNodeType: "image",
              defaultEdgeType: "arrow",
              labelDensity: 0.07,
              labelGridCellSize: 60,
              labelRenderedSizeThreshold: 15,
              labelFont: "Lato, sans-serif",
              zIndex: true,
            }}
          >
            <ControlsContainer position={"bottom-right"}>
              <ZoomControl />
              <FullScreenControl />
              <LayoutForceAtlas2Control />
            </ControlsContainer>
            <ControlsContainer position={"top-right"}>
              <SearchControl style={{ width: "200px" }} />
            </ControlsContainer>
          </SigmaContainer>
        );
      }}
    </BrowserOnly>
  );
};
