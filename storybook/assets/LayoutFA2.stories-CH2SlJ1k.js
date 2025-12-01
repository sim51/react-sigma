import{j as e}from"./jsx-runtime-CLpGMVip.js";import{S as i}from"./style-BpoJR6Iy.js";import{n as l}from"./react-sigma_layout-forceatlas2.esm.min-Co9RTckG.js";import{r as u}from"./index-nBX9XC1j.js";import{S as p}from"./SampleGraph-D8HmCZU1.js";import"./react-sigma_layout-core.esm.min-Bw_kUmRt.js";import"./react-sigma_layout-circular.esm.min-8N5AT14e.js";import"./useRandom-DEpiZglM.js";const c=()=>{const{start:r,kill:n}=l({settings:{slowDown:10}});return u.useEffect(()=>(r(),()=>{n()}),[r,n]),null},m=({style:r})=>e.jsxs(i,{style:r,settings:{allowInvalidContainer:!0},children:[e.jsx(p,{}),e.jsx(c,{})]});m.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const y=`import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { useWorkerLayoutForceAtlas2 } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC, useEffect } from 'react';

import { SampleGraph } from './common/SampleGraph';

const Fa2: FC = () => {
  const { start, kill } = useWorkerLayoutForceAtlas2({ settings: { slowDown: 10 } });

  useEffect(() => {
    // start FA2
    start();

    // Kill FA2 on unmount
    return () => {
      kill();
    };
  }, [start, kill]);

  return null;
};

export const LayoutFA2: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <Fa2 />
    </SigmaContainer>
  );
};
`,k={component:m,id:"layout-fa2-worker",title:"Layouts"},t={name:"Run a FA2 layout manually",args:{},parameters:{storySource:{source:y}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Run a FA2 layout manually',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,k as default};
