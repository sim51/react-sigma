import{f as Y,c as q,N as X,j as p,k as Z,S as $}from"./react-sigma.min-8Vr9hxYt.js";import{S as J}from"./SampleGraph-CAu-nsYo.js";import{L as Q}from"./LayoutsControl-DX5eBnDu.js";import"./index-Dl6G-zuu.js";import"./react-sigma_layout-circular.esm.min-B4cSgDFq.js";import"./react-sigma_layout-core.esm.min-DU411M0l.js";import"./useRandom-QWkgrku0.js";import"./iconBase-D9WZAwfq.js";import"./react-sigma_layout-forceatlas2.esm.min-Cg4e4kb0.js";function rr(r){if(Array.isArray(r))return r}function er(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,i,o,a,c=[],l=!0,u=!1;try{if(o=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=o.call(t)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(s){u=!0,i=s}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}function h(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function A(r,e){if(r){if(typeof r=="string")return h(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(r,e)}}function tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(r,e){return rr(r)||er(r,e)||A(r,e)||tr()}function nr(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ir(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function B(r){var e=ir(r,"string");return typeof e=="symbol"?e:String(e)}function O(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,B(n.key),n)}}function ar(r,e,t){return e&&O(r.prototype,e),t&&O(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function g(r){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(r)}function I(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(I=function(){return!!r})()}function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lr(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cr(r)}function ur(r,e,t){return e=g(e),lr(r,I()?Reflect.construct(e,t||[],g(r).constructor):e.apply(r,t))}function z(r,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},z(r,e)}function sr(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&z(r,e)}function y(r,e,t){return e=B(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function fr(r){if(Array.isArray(r))return h(r)}function dr(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(r){return fr(r)||dr(r)||A(r)||_r()}function j(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function E(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?j(Object(t),!0).forEach(function(n){y(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}var br="relative",pr={borders:[{size:{value:.1},color:{attribute:"borderColor"}},{size:{fill:!0},color:{attribute:"color"}}]},mr="#000000";function w(r){return r%1===0?r.toFixed(1):r.toString()}function vr(r){var e=r.borders,t=w(e.filter(function(i){var o=i.size;return"fill"in o}).length),n=`
precision highp float;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
varying vec4 v_color;
#else
// For normal mode, we use the border colors defined in the program:
`.concat(e.flatMap(function(i,o){var a=i.size;return"attribute"in a?["varying float v_borderSize_".concat(o+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(i,o){var a=i.color;return"attribute"in a?["varying vec4 v_borderColor_".concat(o+1,";")]:"value"in a?["uniform vec4 u_borderColor_".concat(o+1,";")]:[]}).join(`
`),`
#endif

uniform float u_correctionRatio;

const float bias = 255.0 / 254.0;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float dist = length(v_diffVector);
  float aaBorder = 2.0 * u_correctionRatio;
  float v_borderSize_0 = v_radius;
  vec4 v_borderColor_0 = transparent;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > v_radius)
    gl_FragColor = transparent;
  else {
    gl_FragColor = v_color;
    gl_FragColor.a *= bias;
  }
  #else
  // Sizes:
`).concat(e.flatMap(function(i,o){var a=i.size;if("fill"in a)return[];a=a;var c="attribute"in a?"v_borderSize_".concat(o+1):w(a.value),l=(a.mode||br)==="pixels"?"u_correctionRatio":"v_radius";return["  float borderSize_".concat(o+1," = ").concat(l," * ").concat(c,";")]}).join(`
`),`
  // Now, let's split the remaining space between "fill" borders:
  float fillBorderSize = (v_radius - (`).concat(e.flatMap(function(i,o){var a=i.size;return"fill"in a?[]:["borderSize_".concat(o+1)]}).join(" + "),") ) / ").concat(t,`;
`).concat(e.flatMap(function(i,o){var a=i.size;return"fill"in a?["  float borderSize_".concat(o+1," = fillBorderSize;")]:[]}).join(`
`),`

  // Finally, normalize all border sizes, to start from the full size and to end with the smallest:
  float adjustedBorderSize_0 = v_radius;
`).concat(e.map(function(i,o){return"  float adjustedBorderSize_".concat(o+1," = adjustedBorderSize_").concat(o," - borderSize_").concat(o+1,";")}).join(`
`),`

  // Colors:
  vec4 borderColor_0 = transparent;
`).concat(e.map(function(i,o){var a=i.color,c=[];return"attribute"in a?c.push("  vec4 borderColor_".concat(o+1," = v_borderColor_").concat(o+1,";")):"transparent"in a?c.push("  vec4 borderColor_".concat(o+1," = vec4(0.0, 0.0, 0.0, 0.0);")):c.push("  vec4 borderColor_".concat(o+1," = u_borderColor_").concat(o+1,";")),c.push("  borderColor_".concat(o+1,".a *= bias;")),c.push("  if (borderSize_".concat(o+1," <= 1.0 * u_correctionRatio) { borderColor_").concat(o+1," = borderColor_").concat(o,"; }")),c.join(`
`)}).join(`
`),`
  if (dist > adjustedBorderSize_0) {
    gl_FragColor = borderColor_0;
  } else `).concat(e.map(function(i,o){return"if (dist > adjustedBorderSize_".concat(o,` - aaBorder) {
    gl_FragColor = mix(borderColor_`).concat(o+1,", borderColor_").concat(o,", (dist - adjustedBorderSize_").concat(o,` + aaBorder) / aaBorder);
  } else if (dist > adjustedBorderSize_`).concat(o+1,`) {
    gl_FragColor = borderColor_`).concat(o+1,`;
  } else `)}).join(""),` { /* Nothing to add here */ }
  #endif
}
`);return n}function yr(r){var e=r.borders,t=`
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
attribute vec4 a_id;
varying vec4 v_color;
#else
`.concat(e.flatMap(function(n,i){var o=n.size;return"attribute"in o?["attribute float a_borderSize_".concat(i+1,";"),"varying float v_borderSize_".concat(i+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(n,i){var o=n.color;return"attribute"in o?["attribute vec4 a_borderColor_".concat(i+1,";"),"varying vec4 v_borderColor_".concat(i+1,";")]:[]}).join(`
`),`
#endif

const float bias = 255.0 / 254.0;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_radius = size / 2.0;
  v_diffVector = diffVector;

  #ifdef PICKING_MODE
  v_color = a_id;
  #else
`).concat(e.flatMap(function(n,i){var o=n.size;return"attribute"in o?["  v_borderSize_".concat(i+1," = a_borderSize_").concat(i+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(n,i){var o=n.color;return"attribute"in o?["  v_borderColor_".concat(i+1," = a_borderColor_").concat(i+1,";")]:[]}).join(`
`),`
  #endif
}
`);return t}var D=WebGLRenderingContext,N=D.UNSIGNED_BYTE,m=D.FLOAT;function L(r){var e,t=E(E({},pr),r||{}),n=t.borders,i=["u_sizeRatio","u_correctionRatio","u_matrix"].concat(S(n.flatMap(function(o,a){var c=o.color;return"value"in c?["u_borderColor_".concat(a+1)]:[]})));return e=function(o){sr(a,o);function a(){return nr(this,a),ur(this,a,arguments)}return ar(a,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:yr(t),FRAGMENT_SHADER_SOURCE:vr(t),METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:i,ATTRIBUTES:[{name:"a_position",size:2,type:m},{name:"a_id",size:4,type:N,normalized:!0},{name:"a_size",size:1,type:m}].concat(S(n.flatMap(function(l,u){var s=l.color;return"attribute"in s?[{name:"a_borderColor_".concat(u+1),size:4,type:N,normalized:!0}]:[]})),S(n.flatMap(function(l,u){var s=l.size;return"attribute"in s?[{name:"a_borderSize_".concat(u+1),size:1,type:m}]:[]}))),CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:m}],CONSTANT_DATA:[[a.ANGLE_1],[a.ANGLE_2],[a.ANGLE_3]]}}},{key:"processVisibleItem",value:function(l,u,s){var f=this.array;f[u++]=s.x,f[u++]=s.y,f[u++]=l,f[u++]=s.size,n.forEach(function(_){var d=_.color;"attribute"in d&&(f[u++]=Y(s[d.attribute]||d.defaultValue||mr))}),n.forEach(function(_){var d=_.size;"attribute"in d&&(f[u++]=s[d.attribute]||d.defaultValue)})}},{key:"setUniforms",value:function(l,u){var s=u.gl,f=u.uniformLocations,_=f.u_sizeRatio,d=f.u_correctionRatio,x=f.u_matrix;s.uniform1f(d,l.correctionRatio),s.uniform1f(_,l.sizeRatio),s.uniformMatrix3fv(x,!1,l.matrix),n.forEach(function(G,F){var C=G.color;if("value"in C){var V=f["u_borderColor_".concat(F+1)],U=q(C.value),b=or(U,4),k=b[0],H=b[1],K=b[2],W=b[3];s.uniform4f(V,k/255,H/255,K/255,W/255)}})}}]),a}(X),y(e,"ANGLE_1",0),y(e,"ANGLE_2",2*Math.PI/3),y(e,"ANGLE_3",4*Math.PI/3),e}L();const gr={allowInvalidContainer:!0,defaultNodeType:"bordered",nodeProgramClasses:{bordered:L({borders:[{size:{attribute:"borderSize",defaultValue:0},color:{attribute:"borderColor"}},{size:{fill:!0},color:{attribute:"color"}}]})}},M=({style:r})=>p.jsxs(Z,{style:r,settings:gr,children:[p.jsx(J,{}),p.jsx($,{position:"bottom-right",children:p.jsx(Q,{})})]});M.__docgenInfo={description:"",methods:[],displayName:"NodeBorder",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Sr=`import { FC, CSSProperties } from "react";

import { createNodeBorderProgram } from "@sigma/node-border";
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
  defaultNodeType: "bordered",
  nodeProgramClasses: {
    bordered: createNodeBorderProgram({
      borders: [
        { size: { attribute: "borderSize", defaultValue: 0 }, color: { attribute: "borderColor" } },
        { size: { fill: true }, color: { attribute: "color" } },
      ],
    }),
  },
};

export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,Pr={component:M,id:"node-border",title:"Sigma programs"},v={name:"Node with borders",args:{},parameters:{storySource:{source:Sr}}};var R,P,T;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Node with borders",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(T=(P=v.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Tr=["Default"];export{v as Default,Tr as __namedExportsOrder,Pr as default};
