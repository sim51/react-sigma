import { FC } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

import { GraphDefault } from "../../utils/components/GraphDefault";

export default {
  title: "Examples/Multiples",
  component: SigmaContainer,
  parameters: {
    docs: {
      description: {
        component: "Example with multiples instances of sigma on the same page",
      },
    },
  },
};

export const Multiples: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const faTime = Number.parseInt(urlParams.get("faTime") || "2000");
  return (
    <div style={{ width: "100%", height: "calc(100vh - 2em)" }}>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <GraphDefault order={100} probability={0.1} />
        <ControlsContainer position={"top-left"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-left"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <GraphDefault order={100} probability={0.1} />
        <ControlsContainer position={"top-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <GraphDefault order={100} probability={0.1} />
        <ControlsContainer position={"bottom-left"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime} />
        </ControlsContainer>
        <ControlsContainer position={"top-left"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <GraphDefault order={100} probability={0.1} />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime} />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
