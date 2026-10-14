import{j as d}from"./jsx-runtime-CLpGMVip.js";import{S as u}from"./style-CJTJwj8w.js";import{r as t}from"./index-nBX9XC1j.js";import{u as l}from"./useRandom-sd8fEZq-.js";const o=({style:p})=>{const{randomGraph:r}=l(),[c,m]=t.useState(r());return t.useEffect(()=>{const i=setInterval(()=>{m(r)},1e3);return()=>{clearInterval(i)}},[r]),d.jsx(u,{style:p,graph:c})};o.__docgenInfo={description:"",methods:[],displayName:"UpdatedGraphReference",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const f=`import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { useRandom } from './common/useRandom';

export const UpdatedGraphReference: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { randomGraph } = useRandom();
  const [graph, setGraph] = useState(randomGraph());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(randomGraph);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [randomGraph]);

  return <SigmaContainer style={style} graph={graph} />;
};
`,G={component:o,id:"graph-update",title:"Examples"},e={name:"Update graph instance during lifecycle of react-sigma",args:{},parameters:{storySource:{source:f}}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Update graph instance during lifecycle of react-sigma',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,G as default};
