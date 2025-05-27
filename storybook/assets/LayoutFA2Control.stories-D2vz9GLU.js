import{j as o}from"./jsx-runtime-CLpGMVip.js";import{S as i,H as m}from"./style-BRRu8M1x.js";import{c as l}from"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import{S as p}from"./SampleGraph-DQJNK4dY.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";import"./react-sigma_layout-circular.esm.min-BJiOJd2N.js";import"./useRandom-GyQuEz43.js";const s=({style:a})=>o.jsxs(i,{style:a,settings:{allowInvalidContainer:!0},children:[o.jsx(p,{}),o.jsx(m,{position:"bottom-right",children:o.jsx(l,{settings:{settings:{slowDown:10}}})})]});s.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2Control",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const c=`import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC } from 'react';

import { SampleGraph } from './common/SampleGraph';

export const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,x={component:s,id:"layout-fa2-control",title:"Layouts"},t={name:"Run a FA2 layout with the provided controller",args:{},parameters:{storySource:{source:c}}};var r,e,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Run a FA2 layout with the provided controller',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,x as default};
