import{j as e,x as i,k as m}from"./react-sigma.min-Bupy2-id.js";import{N as d}from"./sigma-node-image.esm-B1fzYBIR.js";import{S as p}from"./SampleGraph-alOUFh88.js";import{L as g}from"./LayoutsControl-CFS3FTxi.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-circular.esm.min-BhYom5y4.js";import"./react-sigma_layout-core.esm.min-DJiRb8MY.js";import"./useRandom-fRaoFeZj.js";import"./iconBase-D9WZAwfq.js";import"./react-sigma_layout-forceatlas2.esm.min-DzV-F8N6.js";const l={allowInvalidContainer:!0,defaultNodeType:"image",nodeProgramClasses:{image:d}},a=({style:s})=>e.jsxs(i,{style:s,settings:l,children:[e.jsx(p,{}),e.jsx(m,{position:"bottom-right",children:e.jsx(g,{})})]});a.__docgenInfo={description:"",methods:[],displayName:"NodeImage",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const c=`import { FC, CSSProperties } from "react";

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
//
// NB: Sigma settings are outside the react lifecycle to avoid the change of its ref at every render
// which triggers a full render of sigma. An other way is to use the \`useMemo\` hook inside the component.
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
`,I={component:a,id:"node-image",title:"Sigma programs"},o={name:"Node with images",args:{},parameters:{storySource:{source:c}}};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Node with images",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,I as default};
