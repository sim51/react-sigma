import{b as t,S as i,H as m}from"./react-sigma.min-D1URcM-L.js";import{c as l}from"./react-sigma_layout-forceatlas2.esm.min-OiPLCexD.js";import{S as p}from"./SampleGraph-42-do31b.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-core.esm.min-Dsx0StOz.js";import"./react-sigma_layout-circular.esm.min-G4Q-rnSR.js";import"./useRandom-CvrmMAu1.js";const a=({style:s})=>t.jsxs(i,{style:s,settings:{allowInvalidContainer:!0},children:[t.jsx(p,{}),t.jsx(m,{position:"bottom-right",children:t.jsx(l,{settings:{settings:{slowDown:10}}})})]});a.__docgenInfo={description:"",methods:[],displayName:"LayoutFA2Control",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const c=`import { FC, CSSProperties } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";

export const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,h={component:a,id:"layout-fa2-control",title:"Layouts"},o={name:"Run a FA2 layout with the provided controller",args:{},parameters:{storySource:{source:c}}};var r,e,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Run a FA2 layout with the provided controller",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,h as default};
