import{j as o}from"./jsx-runtime-CLpGMVip.js";import{G as C,S as y,H as i,D as N,A as x}from"./style-CWrtVBmu.js";import{F,S as b}from"./FocusOnNode-C5KIvvG-.js";import{c as G}from"./react-sigma_layout-forceatlas2.esm.min-B42B0U0V.js";import{N as j}from"./sigma-node-image.esm-CMcYhJxg.js";import{r as t}from"./index-nBX9XC1j.js";import{j as v}from"./dataset-1qnfU1y1.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-B8U1ie9s.js";const O={allowInvalidContainer:!0,nodeProgramClasses:{image:j},defaultNodeType:"image",defaultEdgeType:"arrow",labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15,labelFont:"Lato, sans-serif",zIndex:!0},d=({style:u})=>{const g=C.from(v),[r,a]=t.useState(null),[n,l]=t.useState(null),h=t.useCallback(e=>{e===null?l(null):e.type==="nodes"&&l(e.id)},[]),S=t.useCallback(e=>{e===null?a(null):e.type==="nodes"&&a(e.id)},[]),f=t.useCallback(e=>e.length<=10?e:[...e.slice(0,10),{type:"message",message:o.jsxs("span",{className:"text-center text-muted",children:["And ",e.length-10," others"]})}],[]);return o.jsxs(y,{settings:O,style:u,graph:g,children:[o.jsx(F,{node:n??r,move:!n}),o.jsxs(i,{position:"bottom-right",children:[o.jsx(N,{}),o.jsx(x,{}),o.jsx(G,{})]}),o.jsx(i,{position:"top-right",children:o.jsx(b,{type:"nodes",value:r?{type:"nodes",id:r}:null,onFocus:h,onChange:S,postSearchResult:f})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Demo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const D=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { GraphSearch, GraphSearchOption } from '@react-sigma/graph-search';
import '@react-sigma/graph-search/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
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
`,_={component:d,id:"demo",title:"Demos"},s={name:"Sigma demo",args:{},parameters:{storySource:{source:D}}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Sigma demo',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Z=["Default"];export{s as Default,Z as __namedExportsOrder,_ as default};
