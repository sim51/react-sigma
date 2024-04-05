import { FC, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer settings={{ allowInvalidContainer: true }} style={style}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
