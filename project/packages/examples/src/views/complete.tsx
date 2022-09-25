import { FC } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { SampleGraph } from "../common/SampleGraph";
import { LayoutsControl } from "../common/LayoutsControl";

export const CompleteView: FC = () => {
  return (
    <SigmaContainer>
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
