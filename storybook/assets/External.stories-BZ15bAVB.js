import{j as l}from"./jsx-runtime-CLpGMVip.js";import{S as d}from"./style-CJTJwj8w.js";import{r as s}from"./index-nBX9XC1j.js";const i=({style:m})=>{const[t,p]=s.useState(null);return s.useEffect(()=>{if(t){const r=t.getGraph();r.addNode("A",{x:0,y:0,label:"Node A",size:10}),r.addNode("B",{x:1,y:1,label:"Node B",size:10}),r.addEdgeWithKey("rel1","A","B",{label:"REL_1"})}},[t]),l.jsx(d,{ref:p,options:{settings:{itemSizesReference:"screen"}},style:m})};i.__docgenInfo={description:"",methods:[],displayName:"External",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const g=`import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { CSSProperties, FC, useEffect, useState } from 'react';
import Sigma from 'sigma';

type NodeType = { x: number; y: number; label: string; size: number };
type EdgeType = { label: string };

export const External: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Storing the sigma ref provided by react-sigma
  const [sigma, setSigma] = useState<Sigma<NodeType, EdgeType> | null>(null);

  // When the sigma ref is populated
  // => load a graph
  useEffect(() => {
    if (sigma) {
      const graph = sigma.getGraph();
      graph.addNode('A', { x: 0, y: 0, label: 'Node A', size: 10 });
      graph.addNode('B', { x: 1, y: 1, label: 'Node B', size: 10 });
      graph.addEdgeWithKey('rel1', 'A', 'B', { label: 'REL_1' });
    }
  }, [sigma]);

  return <SigmaContainer ref={setSigma} options={{ settings: { itemSizesReference: 'screen' } }} style={style} />;
};
`,S={component:i,id:"external",title:"Examples"},e={name:"Use sigma ref to control it outside the SigmaContainer",args:{},parameters:{storySource:{source:g}}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Use sigma ref to control it outside the SigmaContainer',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,S as default};
