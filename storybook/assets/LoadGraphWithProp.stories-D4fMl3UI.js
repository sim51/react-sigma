import{M as i,b as p,S as d}from"./react-sigma.min-CrKgMPKo.js";import"./index-Dl6G-zuu.js";const n=({style:s})=>{const e=new i;return e.addNode("A",{x:0,y:0,label:"Node A",size:10}),e.addNode("B",{x:1,y:1,label:"Node B",size:10}),e.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),p.jsx(d,{style:s,graph:e,settings:{allowInvalidContainer:!0}})};n.__docgenInfo={description:"",methods:[],displayName:"LoadGraphWithProp",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const l=`import { FC, CSSProperties } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });

  return <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }}></SigmaContainer>;
};
`,g={component:n,id:"load-graph-prop",title:"Graph load"},r={name:"Load a graph using the `graph` property on the `SigmaContainer` component",args:{},parameters:{storySource:{source:l}}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Load a graph using the \`graph\` property on the \`SigmaContainer\` component",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,g as default};
