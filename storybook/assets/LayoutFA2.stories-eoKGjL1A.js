import{j as n,x as m}from"./react-sigma.min-BhnHEgVU.js";import{r as l}from"./index-Dl6G-zuu.js";import{u}from"./react-sigma_layout-forceatlas2.esm.min-BLbhd2aq.js";import{S as c}from"./SampleGraph-DkszSz5Q.js";import"./react-sigma_layout-core.esm.min-B7Vxr_6A.js";import"./react-sigma_layout-circular.esm.min-0pQ7i61b.js";import"./useRandom-BD5vX7bR.js";const p=()=>{const{start:t,kill:e}=u({settings:{slowDown:10}});return l.useEffect(()=>(t(),()=>{e()}),[t,e]),null},g={allowInvalidContainer:!0},i=({style:t})=>n.jsxs(m,{style:t,settings:g,children:[n.jsx(c,{}),n.jsx(p,{})]});i.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const y=`import { FC, useEffect, CSSProperties } from "react";

import { SigmaContainer } from "@react-sigma/core";
import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";

const Fa2: FC = () => {
  const { start, kill } = useWorkerLayoutForceAtlas2({ settings: { slowDown: 10 } });

  useEffect(() => {
    // start FA2
    start();

    // Kill FA2 on unmount
    return () => {
      kill();
    };
  }, [start, kill]);

  return null;
};

const sigmaSettings = {
  allowInvalidContainer: true,
};

export const LayoutFA2: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <Fa2 />
    </SigmaContainer>
  );
};
`,k={component:i,id:"layout-fa2-worker",title:"Layouts"},r={name:"Run a FA2 layout manually",args:{},parameters:{storySource:{source:y}}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Run a FA2 layout manually",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,k as default};
