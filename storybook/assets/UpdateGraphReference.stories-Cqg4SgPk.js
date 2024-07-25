import{b as d,S as l}from"./react-sigma.min-CrKgMPKo.js";import{r as t}from"./index-Dl6G-zuu.js";import{u}from"./useRandom-AQQFxtCG.js";const o=({style:p})=>{const{randomGraph:r}=u(),[c,i]=t.useState(r());return t.useEffect(()=>{const m=setInterval(()=>{i(r)},1e3);return()=>{clearInterval(m)}},[]),d.jsx(l,{style:p,graph:c,settings:{allowInvalidContainer:!0}})};o.__docgenInfo={description:"",methods:[],displayName:"UpdatedGraphReference",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const f=`import { FC, useEffect, useState, CSSProperties } from "react";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

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
  }, []);

  return <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }} />;
};
`,y={component:o,id:"graph-update",title:"Examples"},e={name:"Update graph instance during lifecycle of react-sigma",args:{},parameters:{storySource:{source:f}}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Update graph instance during lifecycle of react-sigma",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,y as default};
