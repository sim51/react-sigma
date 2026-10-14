import{j as t}from"./jsx-runtime-CLpGMVip.js";import{S as n,L as e,I as s,A as r}from"./style-CJTJwj8w.js";import{c as a}from"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import{r as c}from"./index-nBX9XC1j.js";import{S as i}from"./SampleGraph-Dt30DqRJ.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./useRandom-sd8fEZq-.js";const m={height:"50%",width:"50%",float:"left"},l={settings:{}},f=({style:h})=>{const u=c.useRef(null),[o,y]=c.useState(2e3);return c.useEffect(()=>{const d=new URLSearchParams(window.location.search).get("faTime");y(Number.parseInt(d??"2000")||2e3)},[]),t.jsxs("div",{ref:u,style:{height:"100%",...h},children:[t.jsxs(n,{style:m,options:l,children:[t.jsx(i,{}),t.jsxs(e,{position:"top-left",children:[t.jsx(s,{}),t.jsx(r,{container:u}),t.jsx(a,{autoRunFor:o||2e3})]})]}),t.jsxs(n,{style:m,options:l,children:[t.jsx(i,{}),t.jsxs(e,{position:"top-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]})]}),t.jsxs(n,{style:m,options:l,children:[t.jsx(i,{}),t.jsxs(e,{position:"bottom-left",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]})]}),t.jsxs(n,{style:m,options:l,children:[t.jsx(i,{}),t.jsxs(e,{position:"bottom-right",children:[t.jsx(s,{}),t.jsx(r,{}),t.jsx(a,{autoRunFor:o||2e3})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Multiple",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const x=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { SigmaOptions } from 'sigma/types';

import { SampleGraph } from './common/SampleGraph';

// Sigma style
const sigmaStyle: CSSProperties = { height: '50%', width: '50%', float: 'left' };

const sigmaOptions: SigmaOptions = { settings: {} };

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
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'top-left'}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'top-right'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'bottom-left'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
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
`,A={component:f,id:"multi",title:"Examples"},p={name:"Display multiple independant graph on the same page",args:{},parameters:{storySource:{source:x}}};var S,g,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Display multiple independant graph on the same page',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(C=(g=p.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const G=["Default"];export{p as Default,G as __namedExportsOrder,A as default};
