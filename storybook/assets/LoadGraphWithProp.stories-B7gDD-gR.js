import{M as s,j as i,x as d}from"./react-sigma.min-BhnHEgVU.js";import"./index-Dl6G-zuu.js";const n=({style:p})=>{const e=new s;return e.addNode("A",{x:0,y:0,label:"Node A",size:10}),e.addNode("B",{x:1,y:1,label:"Node B",size:10}),e.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),i.jsx(d,{style:p,graph:e})};n.__docgenInfo={description:"",methods:[],displayName:"LoadGraphWithProp",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const m=`import { FC, CSSProperties } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });

  return <SigmaContainer style={style} graph={graph}></SigmaContainer>;
};
`,l={component:n,id:"load-graph-prop",title:"Graph load"},r={name:"Load a graph using the `graph` property on the `SigmaContainer` component",args:{},parameters:{storySource:{source:m}}};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Load a graph using the \`graph\` property on the \`SigmaContainer\` component",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,l as default};
