import{j as s}from"./jsx-runtime-CLpGMVip.js";import{M as i,S as d}from"./style-CJTJwj8w.js";import"./index-nBX9XC1j.js";const n=({style:p})=>{const e=new i;return e.addNode("A",{x:0,y:0,label:"Node A",size:1}),e.addNode("B",{x:10,y:10,label:"Node B",size:1}),e.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),s.jsx(d,{style:p,graph:e})};n.__docgenInfo={description:"",methods:[],displayName:"LoadGraphWithProp",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const m=`import { SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph } from 'graphology';
import { CSSProperties, FC } from 'react';

export const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode('A', { x: 0, y: 0, label: 'Node A', size: 1 });
  graph.addNode('B', { x: 10, y: 10, label: 'Node B', size: 1 });
  graph.addEdgeWithKey('rel1', 'A', 'B', { label: 'REL_1' });

  return <SigmaContainer style={style} graph={graph}></SigmaContainer>;
};
`,g={component:n,id:"load-graph-prop",title:"Graph load"},r={name:"Load a graph using the `graph` property on the `SigmaContainer` component",args:{},parameters:{storySource:{source:m}}};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Load a graph using the \`graph\` property on the \`SigmaContainer\` component',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,g as default};
