import{j as f}from"./jsx-runtime-CLpGMVip.js";import{c as M,n as g,S as E,L as O}from"./style-CJTJwj8w.js";import{a as W,n as D,c as I,e as U,b as k}from"./sigma-primitives.esm-C8czvpAh.js";import{L as V}from"./LayoutsControl-Ck7hkCxP.js";import{S as q}from"./SampleGraph-Dt30DqRJ.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import"./iconBase-ClSLwZge.js";import"./useRandom-sd8fEZq-.js";function h(o,e){(e==null||e>o.length)&&(e=o.length);for(var n=0,l=Array(e);n<e;n++)l[n]=o[n];return l}function R(o){if(Array.isArray(o))return h(o)}function H(o){if(typeof Symbol<"u"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Y(o,e){if(o){if(typeof o=="string")return h(o,e);var n={}.toString.call(o).slice(8,-1);return n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set"?Array.from(o):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(o,e):void 0}}function $(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(o){return R(o)||H(o)||Y(o)||$()}function b(o){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(o)}function C(o){return b(o)==="object"&&o!==null&&"attribute"in o}function A(o){return typeof o=="string"}function m(o){return b(o)==="object"&&o!==null&&"attribute"in o}function J(o){var e=o.filter(function(t){return t.fill}).length,n=g(e||1),l=o.flatMap(function(t,r){if(t.fill)return[];var i=t.size,T=t.mode,G=T==="pixels",d;return m(i)?d="v_borderSize_".concat(r+1):d=g(typeof i=="number"?i:0),G?["  float borderSize_".concat(r+1," = ").concat(d," * context.pixelToUV;")]:["  float borderSize_".concat(r+1," = context.shapeHalfSize * ").concat(d,";")]}).join(`
`),y=o.flatMap(function(t,r){return t.fill?[]:["borderSize_".concat(r+1)]}).join(" + "),S=y||"0.0",v=o.flatMap(function(t,r){return t.fill?["  float borderSize_".concat(r+1," = fillBorderSize;")]:[]}).join(`
`),_=o.map(function(t,r){return"  float boundary_".concat(r+1," = boundary_").concat(r," - borderSize_").concat(r+1,";")}).join(`
`),c=o.map(function(t,r){var i=t.color;return C(i)?"  vec4 borderColor_".concat(r+1," = v_borderColor_").concat(r+1,";"):"  vec4 borderColor_".concat(r+1," = u_borderColor_").concat(r+1,";")}).join(`
`),s=o.map(function(t,r){return"  borderColor_".concat(r+1,`.a *= bias;
  if (borderSize_`).concat(r+1," <= 2.0 * context.aaWidth) { borderColor_").concat(r+1," = ").concat(r===0?"borderColor_1":"borderColor_".concat(r),"; }")}).join(`
`),a=o.map(function(t,r){return r===0?`if (context.sdf > boundary_1) {
    color = borderColor_1;
  } else `:"if (context.sdf > boundary_".concat(r,` - 2.0 * context.aaWidth) {
    color = mix(borderColor_`).concat(r+1,", borderColor_").concat(r,", (context.sdf - boundary_").concat(r,` + 2.0 * context.aaWidth) / (2.0 * context.aaWidth));
  } else if (context.sdf > boundary_`).concat(r+1,`) {
    color = borderColor_`).concat(r+1,`;
  } else `)}).join(""),F=[].concat(u(o.flatMap(function(t,r){var i=t.color;return C(i)?["vec4 v_borderColor_".concat(r+1)]:[]})),u(o.flatMap(function(t,r){var i=t.size;return m(i)?["float v_borderSize_".concat(r+1)]:[]}))),w=o.flatMap(function(t,r){var i=t.color;return A(i)?["vec4 u_borderColor_".concat(r+1)]:[]}),B=[].concat(u(F),u(w)).join(", "),N=m(o[0].size),P=`
vec4 layer_border(`.concat(B,`) {
  const float bias = 255.0 / 254.0;

  // Calculate border sizes (using context.shapeSize and context.pixelSize)
`).concat(l,`
`).concat(N?`
  // Early return if first border size is effectively zero (layer disabled)
  if (borderSize_1 <= context.aaWidth) {
    return vec4(0.0);
  }
`:"",`
  // Calculate fill border size (distribute remaining space)
  // Use inradiusFactor to get actual shape depth from the bounding size
  // For circle/square (inradiusFactor=1.0), this equals shapeSize
  // For triangle (inradiusFactor=0.5), this is half of shapeSize
  float shapeDepth = context.shapeSize * context.inradiusFactor;
  float fillBorderSize = (shapeDepth - (`).concat(S,")) / ").concat(n,`;
`).concat(v,`

  // Calculate cumulative boundaries (from outside to inside in SDF space)
  float boundary_0 = 0.0;  // Shape edge at context.sdf=0
`).concat(_,`

  // Set up colors
`).concat(c,`
`).concat(s,`

  // Select color based on SDF position with antialiasing
  // Note: outer edge AA (context.sdf > 0 transition) is handled by the composed generator's smoothstep
  vec4 color = vec4(0.0);
  `).concat(a,"{ color = borderColor_").concat(o.length,`; }

  return color;
}
`);return P}function K(o){var e,n=(e=o==null?void 0:o.borders)!==null&&e!==void 0?e:[];if(n.length===0)return{name:"border",uniforms:[],attributes:[],glsl:"vec4 layer_border() { return vec4(0.0); }"};var l=WebGL2RenderingContext,y=l.UNSIGNED_BYTE,S=l.FLOAT,v=n.flatMap(function(c,s){var a=c.color;return A(a)?[{name:"u_borderColor_".concat(s+1),type:"vec4",value:M(a)}]:[]}),_=[].concat(u(n.flatMap(function(c,s){var a=c.color;return C(a)?[{name:"borderColor_".concat(s+1),size:4,type:y,normalized:!0,source:a.attribute,defaultValue:a.default}]:[]})),u(n.flatMap(function(c,s){var a=c.size;return m(a)?[{name:"borderSize_".concat(s+1),size:1,type:S,source:a.attribute,defaultValue:a.default}]:[]})));return{name:"border",uniforms:v,attributes:_,glsl:J(n)}}W({size:D(.1,{variable:!0}),color:I("#000000",{variable:!0}),mode:U(["relative","pixels"],"relative"),fill:k(!1)});const Q={primitives:{nodes:{variables:{borderColor:{type:"color",default:"red"}},layers:[K({borders:[{size:.3,color:{attribute:"borderColor"},mode:"relative"},{size:0,color:{attribute:"color"},fill:!0}]})]}}},L=({style:o})=>f.jsxs(E,{style:o,options:Q,children:[f.jsx(q,{}),f.jsx(O,{position:"bottom-right",children:f.jsx(V,{})})]});L.__docgenInfo={description:"",methods:[],displayName:"NodeBorder",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const X=`import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { layerBorder } from '@sigma/node-border';
import { CSSProperties, FC } from 'react';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a \`borderSize\` and/ord \`borderColor\` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//

const sigmaOptions: SigmaOptions = {
  primitives: {
    nodes: {
      variables: {
        borderColor: { type: 'color', default: 'red' },
      },
      layers: [
        layerBorder({
          borders: [
            { size: 0.3, color: { attribute: 'borderColor' }, mode: 'relative' },
            { size: 0, color: { attribute: 'color' }, fill: true },
          ],
        }),
      ],
    },
  },
};
export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={sigmaOptions}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,uo={component:L,id:"node-border",title:"Sigma rendering"},p={name:"Node with borders",args:{},parameters:{storySource:{source:X}}};var z,x,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Node with borders',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const fo=["Default"];export{p as Default,fo as __namedExportsOrder,uo as default};
