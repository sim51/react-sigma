import{j as o}from"./jsx-runtime-CLpGMVip.js";import{l,D as p,S,G as c,L as r,I as d,A as g}from"./style-CJTJwj8w.js";import"./FocusOnNode-HQ0JcCqS.js";import{c as C}from"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import{l as h}from"./react-sigma_minimap.esm.min-q9DKed0z.js";import{l as y}from"./sigma-node-image.esm-sUWDmIwq.js";import{j as f}from"./dataset-1qnfU1y1.js";import{S as t,a as u}from"./SearchNodeControl-D2Flm8hN.js";import"./index-nBX9XC1j.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./sigma-primitives.esm-C8czvpAh.js";const E={settings:{allowInvalidContainer:!0,labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15,itemSizesReference:"screen"},primitives:{nodes:{variables:{image:{type:"string",default:"/"}},layers:[l(),y()]}},styles:{nodes:[p.nodes,{labelFont:"Lato, sans-serif"},...Array.isArray(t)?t:[t]]}},n=({style:m})=>o.jsxs(S,{options:E,style:m,graph:c.from(f),children:[o.jsxs(r,{position:"bottom-right",children:[o.jsx(d,{}),o.jsx(g,{}),o.jsx(C,{})]}),o.jsx(r,{position:"bottom-left",children:o.jsx(h,{width:"100px",height:"100px"})}),o.jsx(r,{position:"top-right",children:o.jsx(u,{})})]});n.__docgenInfo={description:"",methods:[],displayName:"Demo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const b=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import '@react-sigma/graph-search/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { layerImage } from '@sigma/node-image';
import Graph from 'graphology';
import { Attributes, SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import jsonGraph from '../public/react-sigma/demo/dataset.json';
import { EdgeState, GraphState, NodeState, SEARCH_NODES_STYLE, SearchNodeControl } from './common/SearchNodeControl';

// Sigma settings
const sigmaOptions: SigmaOptions<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState> = {
  settings: {
    allowInvalidContainer: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    itemSizesReference: 'screen' as const,
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
      ...(Array.isArray(SEARCH_NODES_STYLE) ? SEARCH_NODES_STYLE : [SEARCH_NODES_STYLE]),
    ],
  },
};

export const Demo: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer options={sigmaOptions} style={style} graph={Graph.from(jsonGraph as SerializedGraph)}>
    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
      <LayoutForceAtlas2Control />
    </ControlsContainer>

    <ControlsContainer position={'bottom-left'}>
      <MiniMap width="100px" height="100px" />
    </ControlsContainer>

    <ControlsContainer position={'top-right'}>
      <SearchNodeControl />
    </ControlsContainer>
  </SigmaContainer>
);
`,Y={component:n,id:"demo",title:"Demos"},e={name:"Sigma demo",args:{},parameters:{storySource:{source:b}}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Sigma demo',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,Y as default};
