import{j as t}from"./jsx-runtime-CLpGMVip.js";import{S as n,H as o,D as s,A as r}from"./style-BRRu8M1x.js";import{c as a}from"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import{r as c}from"./index-nBX9XC1j.js";import{S as i}from"./SampleGraph-DQJNK4dY.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";import"./react-sigma_layout-circular.esm.min-BJiOJd2N.js";import"./useRandom-GyQuEz43.js";const l={allowInvalidContainer:!0},m={height:"50%",width:"50%",float:"left"},f=({style:h})=>{const u=c.useRef(null),[e,d]=c.useState(2e3);return c.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("faTime");d(Number.parseInt(y??"2000")||2e3)},[]),t.jsxs("div",{ref:u,style:{height:"100%",...h},children:[t.jsxs(n,{style:m,settings:l,children:[t.jsx(i,{}),t.jsxs(o,{position:"top-left",children:[t.jsx(s,{}),t.jsx(r,{container:u}),t.jsx(a,{autoRunFor:e||2e3})]})]}),t.jsxs(n,{settings:l,style:m,children:[t.jsx(i,{}),t.jsxs(o,{position:"top-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]})]}),t.jsxs(n,{settings:l,style:m,children:[t.jsx(i,{}),t.jsxs(o,{position:"bottom-left",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]})]}),t.jsxs(n,{settings:l,style:m,children:[t.jsx(i,{}),t.jsxs(o,{position:"bottom-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:e||2e3})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Multiple",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const x=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

import { SampleGraph } from './common/SampleGraph';

// Sigma settings
const sigmaSettings = { allowInvalidContainer: true };
// Sigma style
const sigmaStyle: CSSProperties = { height: '50%', width: '50%', float: 'left' };

export const Multiple: FC<{ style?: CSSProperties }> = ({ style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [faTime, setFaTime] = useState<number>(2000);

  useEffect(() => {
    // Set the FA2 time based on query parameters
    const params = new URLSearchParams(window.location.search);
    const time = params.get('faTime');
    setFaTime(Number.parseInt(time ?? '2000') || 2000);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100%', ...style }}>
      <SigmaContainer style={sigmaStyle} settings={sigmaSettings}>
        <SampleGraph />
        <ControlsContainer position={'top-left'}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={'top-right'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={'bottom-left'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer settings={sigmaSettings} style={sigmaStyle}>
        <SampleGraph />
        <ControlsContainer position={'bottom-right'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
`,G={component:f,id:"multi",title:"Examples"},p={name:"Display multiple independant graph on the same page",args:{},parameters:{storySource:{source:x}}};var g,S,C;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Display multiple independant graph on the same page',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const v=["Default"];export{p as Default,v as __namedExportsOrder,G as default};
