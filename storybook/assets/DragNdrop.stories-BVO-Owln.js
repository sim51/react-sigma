import{b as o,S as l,H as c,L as h,U as f,_ as v,v as N}from"./react-sigma.min-CrKgMPKo.js";import{r as g}from"./index-Dl6G-zuu.js";import{S}from"./SampleGraph-CBZuFH_R.js";import"./react-sigma_layout-circular.esm.min-D7wi5lCk.js";import"./react-sigma_layout-core.esm.min-ChN-8Pd9.js";import"./useRandom-AQQFxtCG.js";const C=()=>{const r=v(),e=N(),[n,a]=g.useState(null);return g.useEffect(()=>{r({downNode:t=>{a(t.node),e.getGraph().setNodeAttribute(t.node,"highlighted",!0)},mousemovebody:t=>{if(!n)return;const i=e.viewportToGraph(t);e.getGraph().setNodeAttribute(n,"x",i.x),e.getGraph().setNodeAttribute(n,"y",i.y),t.preventSigmaDefault(),t.original.preventDefault(),t.original.stopPropagation()},mouseup:()=>{n&&(a(null),e.getGraph().removeNodeAttribute(n,"highlighted"))},mousedown:()=>{e.getCustomBBox()||e.setCustomBBox(e.getBBox())}})},[r,e,n]),null},u=({style:r})=>o.jsxs(l,{style:r,settings:{allowInvalidContainer:!0},children:[o.jsx(S,{disableHoverEffect:!0}),o.jsx(C,{}),o.jsxs(c,{position:"bottom-right",children:[o.jsx(h,{}),o.jsx(f,{})]})]});u.__docgenInfo={description:"",methods:[],displayName:"DragNdrop",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const x=`import { FC, useEffect, useState, CSSProperties } from "react";

import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useRegisterEvents,
  useSigma,
} from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";

const GraphEvents: React.FC = () => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    // Register the events
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
      },
      // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
      mousemovebody: (e) => {
        if (!draggedNode) return;
        // Get new position of node
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

        // Prevent sigma to move camera:
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
      },
      // On mouse up, we reset the autoscale and the dragging mode
      mouseup: () => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
      },
      // Disable the autoscale at the first down interaction
      mousedown: () => {
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
    });
  }, [registerEvents, sigma, draggedNode]);

  return null;
};

export const DragNdrop: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph disableHoverEffect />
      <GraphEvents />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,B={component:u,id:"drag-n-drop",title:"Examples"},s={name:"Drag'n'drop nodes on the graph",args:{},parameters:{storySource:{source:x}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Drag'n'drop nodes on the graph",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["Default"];export{s as Default,A as __namedExportsOrder,B as default};
