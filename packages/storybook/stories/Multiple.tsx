import { FC, useRef, useState, useEffect, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { SampleGraph } from "./common/SampleGraph";

import "@react-sigma/core/lib/react-sigma.min.css";

// Sigma settings
const sigmaSettings = { allowInvalidContainer: true };
// Sigma style
const sigmaStyle: CSSProperties = { height: "50%", width: "50%", float: "left" };

export const Multiple: FC<{ style?: CSSProperties }> = ({ style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [faTime, setFaTime] = useState<number>(2000);

  useEffect(() => {
    // Set the FA2 time based on query parameters
    const params = new URLSearchParams(window.location.search);
    const time = params.get("faTime");
    setFaTime(Number.parseInt(time ?? "2000") || 2000);
  }, [window.location]);

  return (
    <div ref={containerRef} style={{ height: "100%", ...style }}>
      <SigmaContainer style={sigmaStyle} settings={sigmaSettings}>
        <SampleGraph />
        <ControlsContainer position={"top-left"}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-left"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"top-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-right"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"bottom-left"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-left"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
