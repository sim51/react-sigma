import{b as t,S as a,_ as r}from"./react-sigma.min-D1URcM-L.js";import{r as i}from"./index-Dl6G-zuu.js";import{S as d}from"./SampleGraph-42-do31b.js";import"./react-sigma_layout-circular.esm.min-G4Q-rnSR.js";import"./react-sigma_layout-core.esm.min-Dsx0StOz.js";import"./useRandom-CvrmMAu1.js";const v={allowInvalidContainer:!0},u=()=>{const o=r();return i.useEffect(()=>{console.log("register events"),o({clickNode:e=>console.log("clickNode",e.event,e.node,e.preventSigmaDefault),doubleClickNode:e=>console.log("doubleClickNode",e.event,e.node,e.preventSigmaDefault),rightClickNode:e=>console.log("rightClickNode",e.event,e.node,e.preventSigmaDefault),wheelNode:e=>console.log("wheelNode",e.event,e.node,e.preventSigmaDefault),downNode:e=>console.log("downNode",e.event,e.node,e.preventSigmaDefault),enterNode:e=>console.log("enterNode",e.node),leaveNode:e=>console.log("leaveNode",e.node),clickEdge:e=>console.log("clickEdge",e.event,e.edge,e.preventSigmaDefault),doubleClickEdge:e=>console.log("doubleClickEdge",e.event,e.edge,e.preventSigmaDefault),rightClickEdge:e=>console.log("rightClickEdge",e.event,e.edge,e.preventSigmaDefault),wheelEdge:e=>console.log("wheelEdge",e.event,e.edge,e.preventSigmaDefault),downEdge:e=>console.log("downEdge",e.event,e.edge,e.preventSigmaDefault),enterEdge:e=>console.log("enterEdge",e.edge),leaveEdge:e=>console.log("leaveEdge",e.edge),clickStage:e=>console.log("clickStage",e.event,e.preventSigmaDefault),doubleClickStage:e=>console.log("doubleClickStage",e.event,e.preventSigmaDefault),rightClickStage:e=>console.log("rightClickStage",e.event,e.preventSigmaDefault),wheelStage:e=>console.log("wheelStage",e.event,e.preventSigmaDefault),downStage:e=>console.log("downStage",e.event,e.preventSigmaDefault),click:e=>console.log("click",e.x,e.y),doubleClick:e=>console.log("doubleClick",e.x,e.y),wheel:e=>console.log("wheel",e.x,e.y,e.delta),rightClick:e=>console.log("rightClick",e.x,e.y),mouseup:e=>console.log("mouseup",e.x,e.y),mousedown:e=>console.log("mousedown",e.x,e.y),mousemove:e=>console.log("mousemove",e.x,e.y),touchup:e=>console.log("touchup",e.touches),touchdown:e=>console.log("touchdown",e.touches),touchmove:e=>console.log("touchmove",e.touches),kill:()=>console.log("kill"),resize:()=>console.log("resize"),beforeRender:()=>console.log("beforeRender"),afterRender:()=>console.log("afterRender"),updated:e=>console.log("updated",e.x,e.y,e.angle,e.ratio)})},[o]),null},c=({style:o})=>t.jsxs(a,{style:o,settings:v,children:[t.jsx(d,{}),t.jsx(u,{})]});c.__docgenInfo={description:"",methods:[],displayName:"Events",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const m=`import { FC, useEffect, CSSProperties } from "react";

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
`,C={component:c,id:"events",title:"Examples"},n={name:"Open the js console and see all the tracked events",args:{},parameters:{storySource:{source:m}}};var l,s,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Open the js console and see all the tracked events",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(g=(s=n.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,C as default};
