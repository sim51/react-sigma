import { FC, useEffect, CSSProperties } from "react";

import { SigmaContainer, useRegisterEvents } from "@react-sigma/core";
import { SampleGraph } from "./common/SampleGraph";

import "@react-sigma/core/lib/react-sigma.min.css";

// Sigma settings
const sigmaSettings = { allowInvalidContainer: true };

// Create the Component that listen to all events
const GraphEvents: React.FC = () => {
  const registerEvents = useRegisterEvents();

  useEffect(() => {
    console.log("register events");
    // Register the events
    registerEvents({
      // node events
      clickNode: (event) => console.log("clickNode", event.event, event.node, event.preventSigmaDefault),
      doubleClickNode: (event) => console.log("doubleClickNode", event.event, event.node, event.preventSigmaDefault),
      rightClickNode: (event) => console.log("rightClickNode", event.event, event.node, event.preventSigmaDefault),
      wheelNode: (event) => console.log("wheelNode", event.event, event.node, event.preventSigmaDefault),
      downNode: (event) => console.log("downNode", event.event, event.node, event.preventSigmaDefault),
      enterNode: (event) => console.log("enterNode", event.node),
      leaveNode: (event) => console.log("leaveNode", event.node),
      // edge events
      clickEdge: (event) => console.log("clickEdge", event.event, event.edge, event.preventSigmaDefault),
      doubleClickEdge: (event) => console.log("doubleClickEdge", event.event, event.edge, event.preventSigmaDefault),
      rightClickEdge: (event) => console.log("rightClickEdge", event.event, event.edge, event.preventSigmaDefault),
      wheelEdge: (event) => console.log("wheelEdge", event.event, event.edge, event.preventSigmaDefault),
      downEdge: (event) => console.log("downEdge", event.event, event.edge, event.preventSigmaDefault),
      enterEdge: (event) => console.log("enterEdge", event.edge),
      leaveEdge: (event) => console.log("leaveEdge", event.edge),
      // stage events
      clickStage: (event) => console.log("clickStage", event.event, event.preventSigmaDefault),
      doubleClickStage: (event) => console.log("doubleClickStage", event.event, event.preventSigmaDefault),
      rightClickStage: (event) => console.log("rightClickStage", event.event, event.preventSigmaDefault),
      wheelStage: (event) => console.log("wheelStage", event.event, event.preventSigmaDefault),
      downStage: (event) => console.log("downStage", event.event, event.preventSigmaDefault),
      // default mouse events
      click: (event) => console.log("click", event.x, event.y),
      doubleClick: (event) => console.log("doubleClick", event.x, event.y),
      wheel: (event) => console.log("wheel", event.x, event.y, event.delta),
      rightClick: (event) => console.log("rightClick", event.x, event.y),
      mouseup: (event) => console.log("mouseup", event.x, event.y),
      mousedown: (event) => console.log("mousedown", event.x, event.y),
      mousemove: (event) => console.log("mousemove", event.x, event.y),
      // default touch events
      touchup: (event) => console.log("touchup", event.touches),
      touchdown: (event) => console.log("touchdown", event.touches),
      touchmove: (event) => console.log("touchmove", event.touches),
      // sigma kill
      kill: () => console.log("kill"),
      resize: () => console.log("resize"),
      beforeRender: () => console.log("beforeRender"),
      afterRender: () => console.log("afterRender"),
      // sigma camera update
      updated: (event) => console.log("updated", event.x, event.y, event.angle, event.ratio),
    });
  }, [registerEvents]);

  return null;
};

export const Events: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <GraphEvents />
    </SigmaContainer>
  );
};
