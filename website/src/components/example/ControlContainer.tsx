import React, { FC } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import {
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
  useSigma,
} from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

import { GraphDefault } from "../GraphDefault";

const ControlContainer: FC = () => {
  return (
    <SigmaContainer style={{ height: "500px" }}>
      <GraphDefault order={100} probability={0.1} />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};

export default ControlContainer;
