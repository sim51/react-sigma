import{j as o}from"./jsx-runtime-CLpGMVip.js";import{D as p,S as l,L as r,I as S,A as c}from"./style-CJTJwj8w.js";import"./FocusOnNode-HQ0JcCqS.js";import{l as C}from"./react-sigma_minimap.esm.min-q9DKed0z.js";import{L as d}from"./LayoutsControl-Ck7hkCxP.js";import{S as h}from"./SampleGraph-Dt30DqRJ.js";import{S as e,a as g}from"./SearchNodeControl-D2Flm8hN.js";import"./index-nBX9XC1j.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import"./iconBase-ClSLwZge.js";import"./useRandom-sd8fEZq-.js";const y={styles:{nodes:[p.nodes,...Array.isArray(e)?e:[e]]}},n=({style:m})=>o.jsxs(l,{style:m,options:y,children:[o.jsx(h,{}),o.jsxs(r,{position:"bottom-right",children:[o.jsx(S,{}),o.jsx(c,{}),o.jsx(d,{})]}),o.jsx(r,{position:"top-right",children:o.jsx(g,{})}),o.jsx(r,{position:"bottom-left",children:o.jsx(C,{width:"100px",height:"100px"})})]});n.__docgenInfo={description:"",methods:[],displayName:"Complete",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const f=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import '@react-sigma/graph-search/lib/style.css';
import { MiniMap } from '@react-sigma/minimap';
import { Attributes } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';
import { EdgeState, GraphState, NodeState, SEARCH_NODES_STYLE, SearchNodeControl } from './common/SearchNodeControl';

const sigmaOptions: SigmaOptions<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState> = {
  styles: {
    nodes: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.nodes as any,
      ...(Array.isArray(SEARCH_NODES_STYLE) ? SEARCH_NODES_STYLE : [SEARCH_NODES_STYLE]),
    ],
  },
};

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer style={style} options={sigmaOptions}>
    <SampleGraph />

    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
      <LayoutsControl />
    </ControlsContainer>

    <ControlsContainer position={'top-right'}>
      <SearchNodeControl />
    </ControlsContainer>

    <ControlsContainer position={'bottom-left'}>
      <MiniMap width="100px" height="100px" />
    </ControlsContainer>
  </SigmaContainer>
);
`,R={component:n,id:"complete",title:"Demos"},t={name:"A complete tour of the lib with all features",args:{},parameters:{storySource:{source:f}}};var s,i,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'A complete tour of the lib with all features',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,R as default};
