import { FC, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { SampleGraph } from "../common/SampleGraph";

export const MultipleView: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const faTime = Number.parseInt(searchParams.get("faTime") || "2000");

  return (
    <div ref={containerRef} style={{ height: "calc(100% - 2rem - 1.5rem)" }}>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <SampleGraph />
        <ControlsContainer position={"top-left"}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-left"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <SampleGraph />
        <ControlsContainer position={"top-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <SampleGraph />
        <ControlsContainer position={"bottom-left"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-left"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
        <SampleGraph />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
