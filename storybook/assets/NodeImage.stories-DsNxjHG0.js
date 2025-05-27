import{j as o}from"./jsx-runtime-CLpGMVip.js";import{S as i,H as m}from"./style-BRRu8M1x.js";import{N as p}from"./sigma-node-image.esm-BpTJ230J.js";import{L as d}from"./LayoutsControl-qThbrx19.js";import{S as g}from"./SampleGraph-DQJNK4dY.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-BU3fcF5-.js";import"./react-sigma_layout-circular.esm.min-BJiOJd2N.js";import"./react-sigma_layout-forceatlas2.esm.min-OZDjdQJf.js";import"./iconBase-ClSLwZge.js";import"./useRandom-GyQuEz43.js";const l={allowInvalidContainer:!0,defaultNodeType:"image",nodeProgramClasses:{image:p}},a=({style:s})=>o.jsxs(i,{style:s,settings:l,children:[o.jsx(g,{}),o.jsx(m,{position:"bottom-right",children:o.jsx(d,{})})]});a.__docgenInfo={description:"",methods:[],displayName:"NodeImage",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c=`import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { NodeImageProgram } from '@sigma/node-image';
import { CSSProperties, FC } from 'react';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a \`borderSize\` and/ord \`borderColor\` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//
// NB: the graph used in this example is printed in the console.
const sigmaSettings = {
  allowInvalidContainer: true,
  defaultNodeType: 'image',
  nodeProgramClasses: {
    image: NodeImageProgram,
  },
};

export const NodeImage: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,P={component:a,id:"node-image",title:"Sigma programs"},e={name:"Node with images",args:{},parameters:{storySource:{source:c}}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Node with images',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,P as default};
