import React, { FC, useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer, useSigma } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

import { GraphDefault } from "../GraphDefault";

const LayoutFA2Control: FC = () => {
  return (
    <SigmaContainer style={{ height: "500px" }}>
      <GraphDefault order={100} probability={0.1} />
      <ControlsContainer position={"bottom-right"}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};

export default LayoutFA2Control;
