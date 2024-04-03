import{j as s,x as l,y as c,p as h}from"./react-sigma.min-Bupy2-id.js";import{r as g}from"./index-Dl6G-zuu.js";import{S as f}from"./SampleGraph-alOUFh88.js";import"./react-sigma_layout-circular.esm.min-BhYom5y4.js";import"./react-sigma_layout-core.esm.min-DJiRb8MY.js";import"./useRandom-fRaoFeZj.js";const v=()=>{const r=c(),e=h(),[n,a]=g.useState(null);return g.useEffect(()=>{r({downNode:t=>{a(t.node),e.getGraph().setNodeAttribute(t.node,"highlighted",!0)},mousemovebody:t=>{if(!n)return;const i=e.viewportToGraph(t);e.getGraph().setNodeAttribute(n,"x",i.x),e.getGraph().setNodeAttribute(n,"y",i.y),t.preventSigmaDefault(),t.original.preventDefault(),t.original.stopPropagation()},mouseup:()=>{n&&(a(null),e.getGraph().removeNodeAttribute(n,"highlighted"))},mousedown:()=>{e.getCustomBBox()||e.setCustomBBox(e.getBBox())}})},[r,e,n]),null},N={allowInvalidContainer:!0},u=({style:r})=>s.jsxs(l,{style:r,settings:N,children:[s.jsx(f,{disableHoverEffect:!0}),s.jsx(v,{})]});u.__docgenInfo={description:"",methods:[],displayName:"DragNdrop",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const S=`import { FC, useEffect, useState, CSSProperties } from "react";

import { SigmaContainer, useRegisterEvents, useSigma } from "@react-sigma/core";
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

const sigmaSettings = {
  allowInvalidContainer: true,
};

export const DragNdrop: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph disableHoverEffect />
      <GraphEvents />
    </SigmaContainer>
  );
};
`,C={component:u,id:"drag-n-drop",title:"Examples"},o={name:"Drag'n'drop nodes on the graph",args:{},parameters:{storySource:{source:S}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Drag'n'drop nodes on the graph",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,C as default};
