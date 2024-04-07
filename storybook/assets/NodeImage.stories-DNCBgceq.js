import{j as o,k as i,S as m}from"./react-sigma.min-8Vr9hxYt.js";import{N as p}from"./sigma-node-image.esm-CiE29kY7.js";import{S as d}from"./SampleGraph-CAu-nsYo.js";import{L as g}from"./LayoutsControl-DX5eBnDu.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-circular.esm.min-B4cSgDFq.js";import"./react-sigma_layout-core.esm.min-DU411M0l.js";import"./useRandom-QWkgrku0.js";import"./iconBase-D9WZAwfq.js";import"./react-sigma_layout-forceatlas2.esm.min-Cg4e4kb0.js";const l={allowInvalidContainer:!0,defaultNodeType:"image",nodeProgramClasses:{image:p}},a=({style:s})=>o.jsxs(i,{style:s,settings:l,children:[o.jsx(d,{}),o.jsx(m,{position:"bottom-right",children:o.jsx(g,{})})]});a.__docgenInfo={description:"",methods:[],displayName:"NodeImage",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c=`import { FC, CSSProperties } from "react";

import { NodeImageProgram } from "@sigma/node-image";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

import "@react-sigma/core/lib/react-sigma.min.css";

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a \`borderSize\` and/ord \`borderColor\` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//
// NB: the graph used in this example is printed in the console.
const sigmaSettings = {
  allowInvalidContainer: true,
  defaultNodeType: "image",
  nodeProgramClasses: {
    image: NodeImageProgram,
  },
};

export const NodeImage: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,I={component:a,id:"node-image",title:"Sigma programs"},e={name:"Node with images",args:{},parameters:{storySource:{source:c}}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Node with images",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,I as default};
