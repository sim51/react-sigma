import{j as t,x as i,k as m}from"./react-sigma.min-BhnHEgVU.js";import{c as l}from"./react-sigma_layout-forceatlas2.esm.min-BLbhd2aq.js";import{S as p}from"./SampleGraph-DkszSz5Q.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-core.esm.min-B7Vxr_6A.js";import"./react-sigma_layout-circular.esm.min-0pQ7i61b.js";import"./useRandom-BD5vX7bR.js";const c={allowInvalidContainer:!0},s=({style:a})=>t.jsxs(i,{style:a,settings:c,children:[t.jsx(p,{}),t.jsx(m,{position:"bottom-right",children:t.jsx(l,{settings:{settings:{slowDown:10}}})})]});s.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2Control",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const u=`import { FC, CSSProperties } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";

const sigmaSettings = {
  allowInvalidContainer: true,
};

export const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,x={component:s,id:"layout-fa2-control",title:"Layouts"},o={name:"Run a FA2 layout with the provided controller",args:{},parameters:{storySource:{source:u}}};var r,n,e;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Run a FA2 layout with the provided controller",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(e=(n=o.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,x as default};
