import{j as u,x as l}from"./react-sigma.min-Bupy2-id.js";import{r}from"./index-Dl6G-zuu.js";import{u as f}from"./useRandom-fRaoFeZj.js";const o=({style:c})=>{const{randomGraph:t}=f(),[p,m]=r.useState(t()),i=r.useMemo(()=>({allowInvalidContainer:!0}),[]);return r.useEffect(()=>{const d=setInterval(()=>{m(t)},1e3);return()=>{clearInterval(d)}},[]),u.jsx(l,{style:c,graph:p,settings:i})};o.__docgenInfo={description:"",methods:[],displayName:"UpdatedGraphReference",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const g=`import { FC, useEffect, useMemo, useState, CSSProperties } from "react";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

export const UpdatedGraphReference: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { randomGraph } = useRandom();
  const [graph, setGraph] = useState(randomGraph());
  const settings = useMemo(() => ({ allowInvalidContainer: true }), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(randomGraph);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <SigmaContainer style={style} graph={graph} settings={settings} />;
};
`,G={component:o,id:"graph-update",title:"Examples"},e={name:"Update graph instance during lifecycle of react-sigma",args:{},parameters:{storySource:{source:g}}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Update graph instance during lifecycle of react-sigma",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
