import { FC, CSSProperties } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";

const sigmaSettings = {
  allowInvalidContainer: true,
};

export const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
