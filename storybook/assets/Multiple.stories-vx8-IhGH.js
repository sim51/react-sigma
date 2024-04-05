import{j as t,k as e,S as n,I as s,q as r,U as i}from"./react-sigma.min-Bv1msYwt.js";import{r as C}from"./index-Dl6G-zuu.js";import{c as a}from"./react-sigma_layout-forceatlas2.esm.min-DeIr-Rfh.js";import{S as l}from"./SampleGraph-GaF8_Qig.js";import"./react-sigma_layout-core.esm.min-DWwCZ2Eh.js";import"./react-sigma_layout-circular.esm.min-CxXfIbzy.js";import"./useRandom-Bw2Vt9je.js";const m={allowInvalidContainer:!0},p={height:"50%",width:"50%",float:"left"},d=({style:f})=>{const g=C.useRef(null),[o,x]=C.useState(2e3);return C.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("faTime");x(Number.parseInt(y??"2000")||2e3)},[window.location]),t.jsxs("div",{ref:g,style:{height:"100%",...f},children:[t.jsxs(e,{style:p,settings:m,children:[t.jsx(l,{}),t.jsxs(n,{position:"top-left",children:[t.jsx(s,{}),t.jsx(r,{container:g}),t.jsx(a,{autoRunFor:o||2e3})]}),t.jsx(n,{position:"bottom-left",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(e,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"top-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]}),t.jsx(n,{position:"bottom-right",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(e,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"bottom-left",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]}),t.jsx(n,{position:"top-left",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(e,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"bottom-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]}),t.jsx(n,{position:"top-right",children:t.jsx(i,{style:{width:"150px"}})})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Multiple",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const j=`import { FC, useRef, useState, useEffect, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { SampleGraph } from "./common/SampleGraph";

import "@react-sigma/core/lib/react-sigma.min.css";

// Sigma settings
const sigmaSettings = { allowInvalidContainer: true };
// Sigma style
const sigmaStyle: CSSProperties = { height: "50%", width: "50%", float: "left" };

export const Multiple: FC<{ style?: CSSProperties }> = ({ style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [faTime, setFaTime] = useState<number>(2000);

  useEffect(() => {
    // Set the FA2 time based on query parameters
    const params = new URLSearchParams(window.location.search);
    const time = params.get("faTime");
    setFaTime(Number.parseInt(time ?? "2000") || 2000);
  }, [window.location]);

  return (
    <div ref={containerRef} style={{ height: "100%", ...style }}>
      <SigmaContainer style={sigmaStyle} settings={sigmaSettings}>
        <SampleGraph />
        <ControlsContainer position={"top-left"}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-left"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"top-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"bottom-right"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"bottom-left"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-left"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "150px" }} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
`,v={component:d,id:"multi",title:"Examples"},c={name:"Display multiple independant graph on the same page",args:{},parameters:{storySource:{source:j}}};var u,h,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Display multiple independant graph on the same page",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const A=["Default"];export{c as Default,A as __namedExportsOrder,v as default};
