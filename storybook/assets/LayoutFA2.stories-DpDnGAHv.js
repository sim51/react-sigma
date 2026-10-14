import{j as e}from"./jsx-runtime-CLpGMVip.js";import{S as i}from"./style-CJTJwj8w.js";import{n as l}from"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import{r as p}from"./index-nBX9XC1j.js";import{S as u}from"./SampleGraph-Dt30DqRJ.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./useRandom-sd8fEZq-.js";const c=()=>{const{start:r,kill:o}=l({settings:{slowDown:10}});return p.useEffect(()=>(r(),()=>{o()}),[r,o]),null},m=({style:r})=>e.jsxs(i,{style:r,children:[e.jsx(u,{}),e.jsx(c,{})]});m.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const y=`import { SigmaContainer } from '@react-sigma/core';
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
    <SigmaContainer style={style}>
      <SampleGraph />
      <Fa2 />
    </SigmaContainer>
  );
};
`,k={component:m,id:"layout-fa2-worker",title:"Layouts"},t={name:"Run a FA2 layout manually",args:{},parameters:{storySource:{source:y}}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Run a FA2 layout manually',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,k as default};
