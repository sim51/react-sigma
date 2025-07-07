import{j as o}from"./jsx-runtime-CLpGMVip.js";import{G as p,S as l,H as e,D as g,A as d}from"./style-BRRu8M1x.js";import{c}from"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import{l as h}from"./react-sigma_minimap.esm.min-BgtY8dNu.js";import{N as C}from"./sigma-node-image.esm-BpTJ230J.js";import{j as f}from"./dataset-1qnfU1y1.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";const S={allowInvalidContainer:!0,nodeProgramClasses:{image:C},defaultNodeType:"image",defaultEdgeType:"arrow",labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15,labelFont:"Lato, sans-serif"},s=({style:n})=>{const m=p.from(f);return o.jsxs(l,{settings:S,style:n,graph:m,children:[o.jsxs(e,{position:"bottom-right",children:[o.jsx(g,{}),o.jsx(d,{}),o.jsx(c,{})]}),o.jsx(e,{position:"top-right",children:o.jsx(h,{width:"100px",height:"100px"})})]})};s.__docgenInfo={description:"",methods:[],displayName:"MinimapDemo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const u=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';

import jsonGraph from '../public/react-sigma/demo/dataset.json';

// Sigma settings
const sigmaSettings = {
  allowInvalidContainer: true,
  nodeProgramClasses: { image: NodeImageProgram },
  defaultNodeType: 'image',
  defaultEdgeType: 'arrow',
  labelDensity: 0.07,
  labelGridCellSize: 60,
  labelRenderedSizeThreshold: 15,
  labelFont: 'Lato, sans-serif',
};

export const MinimapDemo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph);

  return (
    <SigmaContainer settings={sigmaSettings} style={style} graph={graph}>
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'top-right'}>
        <MiniMap width="100px" height="100px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,P={component:s,id:"minimap",title:"Minimap"},r={name:"Sigma Minimap",args:{},parameters:{storySource:{source:u}}};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Sigma Minimap',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,P as default};
