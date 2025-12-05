import{j as t}from"./jsx-runtime-CLpGMVip.js";import{S as u}from"./style-BpoJR6Iy.js";import{r as s}from"./index-nBX9XC1j.js";import{u as d}from"./useRandom-DEpiZglM.js";const m=({style:i})=>{const{randomGraph:r}=d(),[n,a]=s.useState(r());return s.useEffect(()=>{const p=setInterval(()=>{a(null),setTimeout(()=>a(r),500)},1e3);return()=>{clearInterval(p)}},[r]),t.jsx(t.Fragment,{children:n?t.jsx(u,{style:i,graph:n,settings:{allowInvalidContainer:!0}}):null})};m.__docgenInfo={description:"",methods:[],displayName:"Lifecycle",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const f=`import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import type Graph from 'graphology';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { useRandom } from './common/useRandom';

export const Lifecycle: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { randomGraph } = useRandom();
  const [graph, setGraph] = useState<null | Graph>(randomGraph());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(null);
      setTimeout(() => setGraph(randomGraph), 500);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [randomGraph]);

  return (
    <>{graph ? <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }} /> : null}</>
  );
};
`,G={component:m,id:"lifecycle",title:"Examples"},e={name:"Testing lifecycle",args:{},parameters:{storySource:{source:f}}};var o,c,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Testing lifecycle',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
