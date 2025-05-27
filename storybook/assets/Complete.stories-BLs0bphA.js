import{j as o}from"./jsx-runtime-CLpGMVip.js";import{S as f,H as n,D as g,A as x}from"./style-BRRu8M1x.js";import{F as y,S as N}from"./FocusOnNode-BST3NHyh.js";import{s as F}from"./react-sigma_minimap.esm.min-DdlqzJUk.js";import{r as t}from"./index-nBX9XC1j.js";import{L as b}from"./LayoutsControl-qThbrx19.js";import{S as j}from"./SampleGraph-DQJNK4dY.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";import"./react-sigma_layout-circular.esm.min-BJiOJd2N.js";import"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import"./iconBase-ClSLwZge.js";import"./useRandom-GyQuEz43.js";const m=({style:u})=>{const[r,a]=t.useState(null),[d,l]=t.useState(null),h=t.useCallback(e=>{e===null?l(null):e.type==="nodes"&&l(e.id)},[]),C=t.useCallback(e=>{e===null?a(null):e.type==="nodes"&&a(e.id)},[]),S=t.useCallback(e=>e.length<=10?e:[...e.slice(0,10),{type:"message",message:o.jsxs("span",{className:"text-center text-muted",children:["And ",e.length-10," others"]})}],[]);return o.jsxs(f,{settings:{allowInvalidContainer:!0},style:u,children:[o.jsx(j,{}),o.jsx(y,{node:d??r}),o.jsxs(n,{position:"bottom-right",children:[o.jsx(g,{}),o.jsx(x,{}),o.jsx(b,{})]}),o.jsx(n,{position:"top-right",children:o.jsx(N,{type:"nodes",value:r?{type:"nodes",id:r}:null,onFocus:h,onChange:C,postSearchResult:S})}),o.jsx(n,{position:"bottom-left",children:o.jsx(F,{width:"100px",height:"100px"})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Complete",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const G=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { GraphSearch, GraphSearchOption } from '@react-sigma/graph-search';
import '@react-sigma/graph-search/lib/style.css';
import { MiniMap } from '@react-sigma/minimap';
import { CSSProperties, FC, useCallback, useState } from 'react';

import { FocusOnNode } from './common/FocusOnNode';
import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [focusNode, setFocusNode] = useState<string | null>(null);

  const onFocus = useCallback((value: GraphSearchOption | null) => {
    if (value === null) setFocusNode(null);
    else if (value.type === 'nodes') setFocusNode(value.id);
  }, []);
  const onChange = useCallback((value: GraphSearchOption | null) => {
    if (value === null) setSelectedNode(null);
    else if (value.type === 'nodes') setSelectedNode(value.id);
  }, []);
  const postSearchResult = useCallback((options: GraphSearchOption[]): GraphSearchOption[] => {
    return options.length <= 10
      ? options
      : [
          ...options.slice(0, 10),
          {
            type: 'message',
            message: <span className="text-center text-muted">And {options.length - 10} others</span>,
          },
        ];
  }, []);

  return (
    <SigmaContainer settings={{ allowInvalidContainer: true }} style={style}>
      <SampleGraph />
      <FocusOnNode node={focusNode ?? selectedNode} />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={'top-right'}>
        <GraphSearch
          type="nodes"
          value={selectedNode ? { type: 'nodes', id: selectedNode } : null}
          onFocus={onFocus}
          onChange={onChange}
          postSearchResult={postSearchResult}
        />
      </ControlsContainer>

      <ControlsContainer position={'bottom-left'}>
        <MiniMap width="100px" height="100px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,q={component:m,id:"complete",title:"Demos"},s={name:"A complete tour of the lib with all features",args:{},parameters:{storySource:{source:G}}};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'A complete tour of the lib with all features',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,q as default};
