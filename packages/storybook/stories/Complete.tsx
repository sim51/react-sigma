import { FC, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

// Sigma settings are outside the react lifecycle to avoid the change of its ref at every render
// which triggers a full render of sigma.
// An other way is to use the `useMemo` hook inside the component
const sigmaSettings = { allowInvalidContainer: true };

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer settings={sigmaSettings} style={style}>
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
