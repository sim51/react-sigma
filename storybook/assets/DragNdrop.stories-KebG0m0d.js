import{j as r}from"./jsx-runtime-CLpGMVip.js";import{S as l,H as c,D as h,A as f,y as v,v as N}from"./style-BRRu8M1x.js";import{r as g}from"./index-nBX9XC1j.js";import{S}from"./SampleGraph-DQJNK4dY.js";import"./react-sigma_layout-circular.esm.min-BJiOJd2N.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";import"./useRandom-GyQuEz43.js";const C=()=>{const n=v(),e=N(),[o,a]=g.useState(null);return g.useEffect(()=>{n({downNode:t=>{a(t.node),e.getGraph().setNodeAttribute(t.node,"highlighted",!0)},mousemovebody:t=>{if(!o)return;const i=e.viewportToGraph(t);e.getGraph().setNodeAttribute(o,"x",i.x),e.getGraph().setNodeAttribute(o,"y",i.y),t.preventSigmaDefault(),t.original.preventDefault(),t.original.stopPropagation()},mouseup:()=>{o&&(a(null),e.getGraph().removeNodeAttribute(o,"highlighted"))},mousedown:()=>{e.getCustomBBox()||e.setCustomBBox(e.getBBox())}})},[n,e,o]),null},u=({style:n})=>r.jsxs(l,{style:n,settings:{allowInvalidContainer:!0},children:[r.jsx(S,{disableHoverEffect:!0}),r.jsx(C,{}),r.jsxs(c,{position:"bottom-right",children:[r.jsx(h,{}),r.jsx(f,{})]})]});u.__docgenInfo={description:"",methods:[],displayName:"DragNdrop",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const x=`import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useRegisterEvents,
  useSigma,
} from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { SampleGraph } from './common/SampleGraph';

const GraphEvents: React.FC = () => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    // Register the events
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, 'highlighted', true);
      },
      // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
      mousemovebody: (e) => {
        if (!draggedNode) return;
        // Get new position of node
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, 'x', pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, 'y', pos.y);

        // Prevent sigma to move camera:
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
      },
      // On mouse up, we reset the autoscale and the dragging mode
      mouseup: () => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, 'highlighted');
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
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,A={component:u,id:"drag-n-drop",title:"Examples"},s={name:"Drag'n'drop nodes on the graph",args:{},parameters:{storySource:{source:x}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Drag'n'drop nodes on the graph",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,A as default};
