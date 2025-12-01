import{j as d}from"./jsx-runtime-CLpGMVip.js";import{S as p}from"./style-BpoJR6Iy.js";import{r as a}from"./index-nBX9XC1j.js";const i=({style:l})=>{const[r,m]=a.useState(null);return a.useEffect(()=>{if(r){const t=r.getGraph();t.addNode("A",{x:0,y:0,label:"Node A",size:10}),t.addNode("B",{x:1,y:1,label:"Node B",size:10}),t.addEdgeWithKey("rel1","A","B",{label:"REL_1"})}},[r]),d.jsx(p,{ref:m,settings:{allowInvalidContainer:!0,renderLabels:!1},style:l})};i.__docgenInfo={description:"",methods:[],displayName:"External",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const g=`import { SigmaContainer } from '@react-sigma/core';
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

  return (
    <SigmaContainer ref={setSigma} settings={{ allowInvalidContainer: true, renderLabels: false }} style={style} />
  );
};
`,y={component:i,id:"external",title:"Examples"},e={name:"Use sigma ref to control it outside the SigmaContainer",args:{},parameters:{storySource:{source:g}}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Use sigma ref to control it outside the SigmaContainer',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,y as default};
