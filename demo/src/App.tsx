import { FC } from "react";
import "react-sigma-v2/lib/react-sigma-v2.css";
import { ControlsContainer, ForceAtlasControl, SearchControl, SigmaContainer, ZoomControl } from "react-sigma-v2";
import { MyCustomGraph } from "./MyCustomGraph";

export const App: FC = () => {
  return (
    <SigmaContainer>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <ForceAtlasControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
