import{j as o}from"./jsx-runtime-CLpGMVip.js";import{G as C,S as y,H as a,D as N,A as x}from"./style-BRRu8M1x.js";import{F as b,S as F}from"./FocusOnNode-BST3NHyh.js";import{c as j}from"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import{l as G}from"./react-sigma_minimap.esm.min-BgtY8dNu.js";import{N as v}from"./sigma-node-image.esm-BpTJ230J.js";import{r as t}from"./index-nBX9XC1j.js";import{j as O}from"./dataset-1qnfU1y1.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";const D={allowInvalidContainer:!0,nodeProgramClasses:{image:v},defaultNodeType:"image",defaultEdgeType:"arrow",labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15,labelFont:"Lato, sans-serif",zIndex:!0},d=({style:u})=>{const g=C.from(O),[r,n]=t.useState(null),[l,i]=t.useState(null),h=t.useCallback(e=>{e===null?i(null):e.type==="nodes"&&i(e.id)},[]),S=t.useCallback(e=>{e===null?n(null):e.type==="nodes"&&n(e.id)},[]),f=t.useCallback(e=>e.length<=10?e:[...e.slice(0,10),{type:"message",message:o.jsxs("span",{className:"text-center text-muted",children:["And ",e.length-10," others"]})}],[]);return o.jsxs(y,{settings:D,style:u,graph:g,children:[o.jsx(b,{node:l??r,move:!l}),o.jsxs(a,{position:"bottom-right",children:[o.jsx(N,{}),o.jsx(x,{}),o.jsx(j,{})]}),o.jsx(a,{position:"bottom-left",children:o.jsx(G,{width:"100px",height:"100px"})}),o.jsx(a,{position:"top-right",children:o.jsx(F,{type:"nodes",value:r?{type:"nodes",id:r}:null,onFocus:h,onChange:S,postSearchResult:f})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Demo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const z=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { GraphSearch, GraphSearchOption } from '@react-sigma/graph-search';
import '@react-sigma/graph-search/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { CSSProperties, FC, useCallback, useState } from 'react';

import jsonGraph from '../public/react-sigma/demo/dataset.json';
import { FocusOnNode } from './common/FocusOnNode';

// Sigma settings
const sigmaSettings = {
  allowInvalidContainer: true,
  nodeProgramClasses: { image: NodeImageProgram },
  defaultNodeType: 'image',
  defaultEdgeType: 'arrow',
  labelDensity: 0.07,
  labelGridCellSize: 60,
  labelRenderedSizeThreshold: 15,
  labelFont: 'Lato, sans-serif',
  zIndex: true,
};

export const Demo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph);

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
    <SigmaContainer settings={sigmaSettings} style={style} graph={graph}>
      <FocusOnNode node={focusNode ?? selectedNode} move={focusNode ? false : true} />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'bottom-left'}>
        <MiniMap width="100px" height="100px" />
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
    </SigmaContainer>
  );
};
`,Z={component:d,id:"demo",title:"Demos"},s={name:"Sigma demo",args:{},parameters:{storySource:{source:z}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sigma demo',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,Z as default};
