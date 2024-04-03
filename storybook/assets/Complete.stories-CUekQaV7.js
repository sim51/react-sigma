import{j as o,x as m,k as e,B as l,T as p,q as c}from"./react-sigma.min-Bupy2-id.js";import{S as C}from"./SampleGraph-alOUFh88.js";import{L as u}from"./LayoutsControl-CFS3FTxi.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-circular.esm.min-BhYom5y4.js";import"./react-sigma_layout-core.esm.min-DJiRb8MY.js";import"./useRandom-fRaoFeZj.js";import"./iconBase-D9WZAwfq.js";import"./react-sigma_layout-forceatlas2.esm.min-DzV-F8N6.js";const h={allowInvalidContainer:!0},i=({style:a})=>o.jsxs(m,{settings:h,style:a,children:[o.jsx(C,{}),o.jsxs(e,{position:"bottom-right",children:[o.jsx(l,{}),o.jsx(p,{}),o.jsx(u,{})]}),o.jsx(e,{position:"top-right",children:o.jsx(c,{style:{width:"200px"}})})]});i.__docgenInfo={description:"",methods:[],displayName:"Complete",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const g=`import { FC, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

// Sigma settings are outside the react lifecycle to avoid the change of its ref at every render
// which triggers a full render of sigma.
// An other way is to use the \`useMemo\` hook inside the component
const sigmaSettings = { allowInvalidContainer: true };

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer settings={sigmaSettings} style={style}>
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
`,v={component:i,id:"complete",title:"Demos"},t={name:"A complete tour of the lib with all features",args:{},parameters:{storySource:{source:g}}};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "A complete tour of the lib with all features",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,v as default};
