import{j as o,k as m,S as r,I as l,q as p,U as c}from"./react-sigma.min-uXSbVoH1.js";import{S as C}from"./SampleGraph-pRBc4b4N.js";import{L as u}from"./LayoutsControl-3OgJihit.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-circular.esm.min-CYape0LM.js";import"./react-sigma_layout-core.esm.min-Dtit1MEo.js";import"./useRandom-CxcujAnY.js";import"./iconBase-D9WZAwfq.js";import"./react-sigma_layout-forceatlas2.esm.min-DLqm7pWr.js";const a=({style:i})=>o.jsxs(m,{settings:{allowInvalidContainer:!0},style:i,children:[o.jsx(C,{}),o.jsxs(r,{position:"bottom-right",children:[o.jsx(l,{}),o.jsx(p,{}),o.jsx(u,{})]}),o.jsx(r,{position:"top-right",children:o.jsx(c,{style:{width:"200px"}})})]});a.__docgenInfo={description:"",methods:[],displayName:"Complete",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const S=`import { FC, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer settings={{ allowInvalidContainer: true }} style={style}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={"top-right"}>
        <SearchControl style={{ width: "200px" }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,L={component:a,id:"complete",title:"Demos"},t={name:"A complete tour of the lib with all features",args:{},parameters:{storySource:{source:S}}};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "A complete tour of the lib with all features",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,L as default};
