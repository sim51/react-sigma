import{j as e}from"./jsx-runtime-CLpGMVip.js";import{l as s,S as m,L as l}from"./style-CJTJwj8w.js";import{l as p}from"./sigma-node-image.esm-sUWDmIwq.js";import{L as d}from"./LayoutsControl-Ck7hkCxP.js";import{S as g}from"./SampleGraph-Dt30DqRJ.js";import"./index-nBX9XC1j.js";import"./sigma-primitives.esm-C8czvpAh.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import"./iconBase-ClSLwZge.js";import"./useRandom-sd8fEZq-.js";const c={settings:{allowInvalidContainer:!0,labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15},primitives:{nodes:{variables:{image:{type:"string",default:"/"}},layers:[s(),p()]}}},i=({style:a})=>e.jsxs(m,{style:a,options:c,children:[e.jsx(g,{}),e.jsx(l,{position:"bottom-right",children:e.jsx(d,{})})]});i.__docgenInfo={description:"",methods:[],displayName:"NodeImage",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const y=`import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { layerImage } from '@sigma/node-image';
import { CSSProperties, FC } from 'react';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a \`borderSize\` and/ord \`borderColor\` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//

// Sigma settings
const sigmaOptions: SigmaOptions = {
  settings: {
    allowInvalidContainer: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
  },
  primitives: {
    nodes: {
      variables: { image: { type: 'string', default: '/' } },
      layers: [layerFill(), layerImage()],
    },
  },
};

export const NodeImage: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={sigmaOptions}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,G={component:i,id:"node-image",title:"Sigma rendering"},o={name:"Node with images",args:{},parameters:{storySource:{source:y}}};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Node with images',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const L=["Default"];export{o as Default,L as __namedExportsOrder,G as default};
