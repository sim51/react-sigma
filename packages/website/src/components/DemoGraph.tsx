import React, { FC, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";

import Graph from "graphology";
import style from "@react-sigma/core/lib/assets/index.scss";
import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
import jsonGraph from "../../static/demo/dataset.json";

import {
  SigmaContainer,
  useLoadGraph,
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
} from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

export const DemoGraph: FC<{}> = () => {
  console.log(style);
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
};
