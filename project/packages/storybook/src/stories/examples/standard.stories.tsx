import { FC } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";

import { LayoutsControl } from "../../utils/components/LayoutsControl";
import { GraphDefault } from "../../utils/components/GraphDefault";

export default {
  title: "Examples/Standard",
  component: SigmaContainer,
  parameters: {
    docs: {
      description: {
        component: "Example with the all the standard feature of the reac-sigma",
      },
    },
  },
};

export const Standard: FC = () => (
  <SigmaContainer style={{ width: "100%", height: "calc(100vh - 2em)" }}>
    <GraphDefault order={100} probability={0.1} />
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
