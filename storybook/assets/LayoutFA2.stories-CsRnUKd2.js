import{j as n,k as m}from"./react-sigma.min-Bv1msYwt.js";import{r as l}from"./index-Dl6G-zuu.js";import{u}from"./react-sigma_layout-forceatlas2.esm.min-DeIr-Rfh.js";import{S as c}from"./SampleGraph-GaF8_Qig.js";import"./react-sigma_layout-core.esm.min-DWwCZ2Eh.js";import"./react-sigma_layout-circular.esm.min-CxXfIbzy.js";import"./useRandom-Bw2Vt9je.js";const p=()=>{const{start:r,kill:e}=u({settings:{slowDown:10}});return l.useEffect(()=>(r(),()=>{e()}),[r,e]),null},i=({style:r})=>n.jsxs(m,{style:r,settings:{allowInvalidContainer:!0},children:[n.jsx(c,{}),n.jsx(p,{})]});i.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const y=`import { FC, useEffect, CSSProperties } from "react";

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

export const LayoutFA2: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <Fa2 />
    </SigmaContainer>
  );
};
`,A={component:i,id:"layout-fa2-worker",title:"Layouts"},t={name:"Run a FA2 layout manually",args:{},parameters:{storySource:{source:y}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Run a FA2 layout manually",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,A as default};
