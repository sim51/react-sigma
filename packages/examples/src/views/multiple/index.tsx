import { FC } from "react";
import { useSearchParams } from "react-router-dom";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl , FullScreenControl} from "@react-sigma/core";
import {LayoutForceAtlas2Control} from "@react-sigma/layout-forceatlas2";
import { MyGraph } from "./my-graph";

export const MultipleView: FC = () => {
  const [searchParams] = useSearchParams();
  const faTime = Number.parseInt(searchParams.get("faTime") || "2000");

  return (
    <>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyGraph />
      <ControlsContainer position={"top-left"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
      </ControlsContainer>
      <ControlsContainer position={"bottom-left"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
    <SigmaContainer style={{ height: "50%", width: "50%", float: "left", backgroundColor: "#FFF" }}>
      <MyGraph />
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
      <MyGraph />
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
      <MyGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
    </>
  );
};
