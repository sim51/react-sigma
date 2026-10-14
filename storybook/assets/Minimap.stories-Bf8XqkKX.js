import{j as e}from"./jsx-runtime-CLpGMVip.js";import{l,D as p,G as g,S as c,L as r,I as d,A as S}from"./style-CJTJwj8w.js";import{c as f}from"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import{l as y}from"./react-sigma_minimap.esm.min-q9DKed0z.js";import{l as h}from"./sigma-node-image.esm-sUWDmIwq.js";import{j as C}from"./dataset-1qnfU1y1.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./sigma-primitives.esm-C8czvpAh.js";const u={settings:{labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15,itemSizesReference:"screen"},primitives:{nodes:{variables:{image:{type:"string",default:"/"}},layers:[l(),h()]}},styles:{nodes:[p.nodes,{labelFont:"Lato, sans-serif"}]}},a=({style:n})=>{const m=g.from(C);return e.jsxs(c,{options:u,style:n,graph:m,children:[e.jsxs(r,{position:"bottom-right",children:[e.jsx(d,{}),e.jsx(S,{}),e.jsx(f,{})]}),e.jsx(r,{position:"bottom-left",children:e.jsx(y,{width:"100px",height:"100px"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"MinimapDemo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const b=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { layerImage } from '@sigma/node-image';
import Graph from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import jsonGraph from '../public/react-sigma/demo/dataset.json';

// Sigma settings
const sigmaOptions: SigmaOptions = {
  settings: {
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    itemSizesReference: 'screen',
  },
  primitives: {
    nodes: {
      variables: { image: { type: 'string', default: '/' } },
      layers: [layerFill(), layerImage()],
    },
  },
  styles: {
    nodes: [
      DEFAULT_STYLES.nodes,
      {
        labelFont: 'Lato, sans-serif',
      },
    ],
  },
};

export const MinimapDemo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph);

  return (
    <SigmaContainer options={sigmaOptions} style={style} graph={graph}>
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'bottom-left'}>
        <MiniMap width="100px" height="100px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,E={component:a,id:"minimap",title:"Minimap"},o={name:"Sigma Minimap",args:{},parameters:{storySource:{source:b}}};var t,i,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Sigma Minimap',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,E as default};
