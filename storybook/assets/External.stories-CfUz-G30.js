import{j as g,x as p}from"./react-sigma.min-Bupy2-id.js";import{r as a}from"./index-Dl6G-zuu.js";const i=({style:m})=>{const[t,l]=a.useState(null),d=a.useMemo(()=>({allowInvalidContainer:!0,renderLabels:!1}),[]);return a.useEffect(()=>{if(t){const r=t.getGraph();r.addNode("A",{x:0,y:0,label:"Node A",size:10}),r.addNode("B",{x:1,y:1,label:"Node B",size:10}),r.addEdgeWithKey("rel1","A","B",{label:"REL_1"})}},[t]),g.jsx(p,{ref:l,settings:d,style:m})};i.__docgenInfo={description:"",methods:[],displayName:"External",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c=`import { FC, useEffect, useMemo, useState, CSSProperties } from "react";
import Sigma from "sigma";

import { SigmaContainer } from "@react-sigma/core";

import "@react-sigma/core/lib/react-sigma.min.css";

type NodeType = { x: number; y: number; label: string; size: number };
type EdgeType = { label: string };

export const External: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Storing the sigma ref provided by react-sigma
  const [sigma, setSigma] = useState<Sigma<NodeType, EdgeType> | null>(null);
  // Memo sigma settings to avoid re-render sigma at each component render
  const settings = useMemo(() => ({ allowInvalidContainer: true, renderLabels: false }), []);

  // When the sigma ref is populated
  // => load a graph
  useEffect(() => {
    if (sigma) {
      const graph = sigma.getGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    }
  }, [sigma]);

  return <SigmaContainer ref={setSigma} settings={settings} style={style} />;
};
`,y={component:i,id:"external",title:"Examples"},e={name:"Use sigma ref to control it outside the SigmaContainer",args:{},parameters:{storySource:{source:c}}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Use sigma ref to control it outside the SigmaContainer",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,y as default};
