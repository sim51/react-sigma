import { faTime, rng } from "./utils/random";
import React, { ReactNode, useEffect, CSSProperties } from "react";
import ReactDOM from "react-dom";
import { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";
import circularLayout from "graphology-layout/circular";
import { BsArrowsFullscreen, BsFullscreenExit, BsZoomIn, BsZoomOut, BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiRadioCircleMarked } from "react-icons/bi";
import faker from "faker";

import {
  ControlsContainer,
  ForceAtlasControl,
  useLoadGraph,
  useSetSettings,
  SearchControl,
  SigmaContainer,
  ZoomControl,
  FullScreenControl,
} from "../src/index";
import "../src/assets/index.scss";

interface MyCustomGraphProps {
  children?: ReactNode;
}

export const MyCustomGraph: React.FC<MyCustomGraphProps> = ({ children }) => {
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();

  useEffect(() => {
    setSettings({
      labelRenderedSizeThreshold: 20,
    });
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1, rng });
    circularLayout.assign(graph);
    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: faker.name.findName(),
        size: faker.random.number({ min: 4, max: 20, precision: 1 }),
      });
    });
    loadGraph(graph);
  }, []);

  return <>{children}</>;
};

const btnStyle: CSSProperties = {
  margin: "5px",
  border: "1px black gray",
  borderRadius: "5px",
  boxShadow: "5px 5px 5px grey",
};

ReactDOM.render(
  <React.StrictMode>
    <SigmaContainer>
      <MyCustomGraph />
      <ControlsContainer position={"bottom-right"} style={{ border: "none" }}>
        <ZoomControl
          className="sigma-control"
          style={btnStyle}
          customZoomIn={<BsZoomIn />}
          customZoomOut={<BsZoomOut />}
          customZoomCenter={<BiRadioCircleMarked />}
        />
        <ForceAtlasControl
          className="sigma-control"
          style={btnStyle}
          autoRunFor={faTime || 2000}
          customStartLayout={<BsFillPlayFill />}
          customStopLayout={<BsPauseFill />}
        />
        <FullScreenControl
          className="sigma-control"
          style={btnStyle}
          customEnterFullScreen={<BsArrowsFullscreen />}
          customExitFullScreen={<BsFullscreenExit />}
        />
      </ControlsContainer>
      <ControlsContainer position={"top-right"} style={{ border: "none" }}>
        <SearchControl className="sigma-control" style={{ ...btnStyle, width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  </React.StrictMode>,
  document.getElementById("root"),
);
