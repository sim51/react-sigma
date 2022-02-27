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
        const ReactSigma = require("@react-sigma/core");
        console.log(ReactSigma);
        const { LayoutForceAtlas2Control } = require("@react-sigma/layout-forceatlas2");
        const jsonGraph = require("../../static/demo/dataset.json");

        const graph = Graph.from(jsonGraph);
        return (
          <ReactSigma.SigmaContainer
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
            <ReactSigma.ControlsContainer position={"bottom-right"}>
              <ReactSigma.ZoomControl>
                <>+</>
                <>-</>
                <>R</>
              </ReactSigma.ZoomControl>
              <ReactSigma.FullScreenControl>
                <>FS</>
                <>Exit</>
              </ReactSigma.FullScreenControl>
            </ReactSigma.ControlsContainer>
            <ReactSigma.ControlsContainer position={"top-right"}>
              <ReactSigma.SearchControl style={{ width: "200px" }} />
            </ReactSigma.ControlsContainer>
          </ReactSigma.SigmaContainer>
        );
      }}
    </BrowserOnly>
  );
};
