import{j as r}from"./jsx-runtime-CLpGMVip.js";import{S as i,L as p,I as m,A as d}from"./style-CJTJwj8w.js";import{S as c}from"./SampleGraph-Dt30DqRJ.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./useRandom-sd8fEZq-.js";const a=({style:s})=>r.jsxs(i,{style:s,options:{settings:{enableNodeDrag:!0}},children:[r.jsx(c,{}),r.jsxs(p,{position:"bottom-right",children:[r.jsx(m,{}),r.jsx(d,{})]})]});a.__docgenInfo={description:"With sigma v4, drag'n'drop feature is free, you just have to enabled it via the setting `enableNodeDrag`.\nCheck the documentation: https://www.sigmajs.org/how-to/interactivity/drag-drop/",methods:[],displayName:"DragNdrop",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const g=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { CSSProperties, FC } from 'react';

import { SampleGraph } from './common/SampleGraph';

/**
 * With sigma v4, drag'n'drop feature is free, you just have to enabled it via the setting \`enableNodeDrag\`.
 * Check the documentation: https://www.sigmajs.org/how-to/interactivity/drag-drop/
 */
export const DragNdrop: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={{ settings: { enableNodeDrag: true } }}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,j={component:a,id:"drag-n-drop",title:"Examples"},e={name:"Drag'n'drop nodes on the graph",args:{},parameters:{storySource:{source:g}}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Drag'n'drop nodes on the graph",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
