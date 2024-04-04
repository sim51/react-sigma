import{j as t,x as o,k as n,B as s,T as r,q as i}from"./react-sigma.min-BhnHEgVU.js";import{r as h}from"./index-Dl6G-zuu.js";import{c as a}from"./react-sigma_layout-forceatlas2.esm.min-BLbhd2aq.js";import{S as l}from"./SampleGraph-DkszSz5Q.js";import"./react-sigma_layout-core.esm.min-B7Vxr_6A.js";import"./react-sigma_layout-circular.esm.min-0pQ7i61b.js";import"./useRandom-BD5vX7bR.js";const m={allowInvalidContainer:!0},p={height:"50%",width:"50%",float:"left"},d=({style:f})=>{const C=h.useRef(null),[e,x]=h.useState(2e3);return h.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("faTime");x(Number.parseInt(y??"2000")||2e3)},[window.location]),t.jsxs("div",{ref:C,style:{height:"100%",...f},children:[t.jsxs(o,{style:p,settings:m,children:[t.jsx(l,{}),t.jsxs(n,{position:"top-left",children:[t.jsx(s,{}),t.jsx(r,{container:C}),t.jsx(a,{autoRunFor:e||2e3})]}),t.jsx(n,{position:"bottom-left",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(o,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"top-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]}),t.jsx(n,{position:"bottom-right",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(o,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"bottom-left",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]}),t.jsx(n,{position:"top-left",children:t.jsx(i,{style:{width:"150px"}})})]}),t.jsxs(o,{settings:m,style:p,children:[t.jsx(l,{}),t.jsxs(n,{position:"bottom-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]}),t.jsx(n,{position:"top-right",children:t.jsx(i,{style:{width:"150px"}})})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Multiple",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const j=`import { FC, useRef, useState, useEffect, CSSProperties } from "react";

import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { SampleGraph } from "./common/SampleGraph";

import "@react-sigma/core/lib/react-sigma.min.css";

// Sigma settings are outside the react lifecycle to avoid the change of its ref at every render
// which triggers a full render of sigma.
// An other way is to use the \`useMemo\` hook inside the component
const sigmaSettings = { allowInvalidContainer: true };
// Same for the style
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
`,A={component:d,id:"multi",title:"Examples"},c={name:"Display multiple independant graph on the same page",args:{},parameters:{storySource:{source:j}}};var u,g,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Display multiple independant graph on the same page",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(S=(g=c.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const G=["Default"];export{c as Default,G as __namedExportsOrder,A as default};
