import{j as y}from"./jsx-runtime-CLpGMVip.js";import{N as X,f as Z,c as $,n as E,S as J,H as Q}from"./style-Bs0cF8GC.js";import{L as rr}from"./LayoutsControl-FbNiqm7s.js";import{S as er}from"./SampleGraph-C502VTcV.js";import"./index-nBX9XC1j.js";import"./react-sigma_layout-core.esm.min-B1-YC6fm.js";import"./react-sigma_layout-circular.esm.min-DlSG5r-H.js";import"./react-sigma_layout-forceatlas2.esm.min-CAielD99.js";import"./iconBase-ClSLwZge.js";import"./useRandom-B-rp2XRI.js";function or(r){if(Array.isArray(r))return r}function tr(r,e){var o=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var n,a,t,i,l=[],s=!0,d=!1;try{if(t=(o=o.call(r)).next,e!==0)for(;!(s=(n=t.call(o)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(f){d=!0,a=f}finally{try{if(!s&&o.return!=null&&(i=o.return(),Object(i)!==i))return}finally{if(d)throw a}}return l}}function z(r,e){(e==null||e>r.length)&&(e=r.length);for(var o=0,n=Array(e);o<e;o++)n[o]=r[o];return n}function B(r,e){if(r){if(typeof r=="string")return z(r,e);var o={}.toString.call(r).slice(8,-1);return o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set"?Array.from(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?z(r,e):void 0}}function nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(r,e){return or(r)||tr(r,e)||B(r,e)||nr()}function ir(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function cr(r,e){if(typeof r!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var n=o.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function I(r){var e=cr(r,"string");return typeof e=="symbol"?e:e+""}function lr(r,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,I(n.key),n)}}function sr(r,e,o){return lr(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function S(r){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(r)}function D(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!r})()}function O(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ur(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(r)}function fr(r,e,o){return e=S(e),ur(r,D()?Reflect.construct(e,o,S(r).constructor):e.apply(r,o))}function j(r,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,n){return o.__proto__=n,o},j(r,e)}function dr(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),j(r,e)}function _(r,e,o){return(e=I(e))in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}function br(r){if(Array.isArray(r))return z(r)}function pr(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(r){return br(r)||pr(r)||B(r)||_r()}function N(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),o.push.apply(o,n)}return o}function R(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?N(Object(o),!0).forEach(function(n){_(r,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):N(Object(o)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(o,n))})}return r}var mr="relative",vr={drawLabel:void 0,drawHover:void 0,borders:[{size:{value:.1},color:{attribute:"borderColor"}},{size:{fill:!0},color:{attribute:"color"}}]},yr="#000000";function gr(r){var e=r.borders,o=E(e.filter(function(a){var t=a.size;return"fill"in t}).length),n=`
precision highp float;

varying vec2 v_diffVector;
varying float v_radius;

#ifdef PICKING_MODE
varying vec4 v_color;
#else
// For normal mode, we use the border colors defined in the program:
`.concat(e.flatMap(function(a,t){var i=a.size;return"attribute"in i?["varying float v_borderSize_".concat(t+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(a,t){var i=a.color;return"attribute"in i?["varying vec4 v_borderColor_".concat(t+1,";")]:"value"in i?["uniform vec4 u_borderColor_".concat(t+1,";")]:[]}).join(`
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
`).concat(e.flatMap(function(a,t){var i=a.size;if("fill"in i)return[];i=i;var l="attribute"in i?"v_borderSize_".concat(t+1):E(i.value),s=(i.mode||mr)==="pixels"?"u_correctionRatio":"v_radius";return["  float borderSize_".concat(t+1," = ").concat(s," * ").concat(l,";")]}).join(`
`),`
  // Now, let's split the remaining space between "fill" borders:
  float fillBorderSize = (v_radius - (`).concat(e.flatMap(function(a,t){var i=a.size;return"fill"in i?[]:["borderSize_".concat(t+1)]}).join(" + "),") ) / ").concat(o,`;
`).concat(e.flatMap(function(a,t){var i=a.size;return"fill"in i?["  float borderSize_".concat(t+1," = fillBorderSize;")]:[]}).join(`
`),`

  // Finally, normalize all border sizes, to start from the full size and to end with the smallest:
  float adjustedBorderSize_0 = v_radius;
`).concat(e.map(function(a,t){return"  float adjustedBorderSize_".concat(t+1," = adjustedBorderSize_").concat(t," - borderSize_").concat(t+1,";")}).join(`
`),`

  // Colors:
  vec4 borderColor_0 = transparent;
`).concat(e.map(function(a,t){var i=a.color,l=[];return"attribute"in i?l.push("  vec4 borderColor_".concat(t+1," = v_borderColor_").concat(t+1,";")):"transparent"in i?l.push("  vec4 borderColor_".concat(t+1," = vec4(0.0, 0.0, 0.0, 0.0);")):l.push("  vec4 borderColor_".concat(t+1," = u_borderColor_").concat(t+1,";")),l.push("  borderColor_".concat(t+1,".a *= bias;")),l.push("  if (borderSize_".concat(t+1," <= 1.0 * u_correctionRatio) { borderColor_").concat(t+1," = borderColor_").concat(t,"; }")),l.join(`
`)}).join(`
`),`
  if (dist > adjustedBorderSize_0) {
    gl_FragColor = borderColor_0;
  } else `).concat(e.map(function(a,t){return"if (dist > adjustedBorderSize_".concat(t,` - aaBorder) {
    gl_FragColor = mix(borderColor_`).concat(t+1,", borderColor_").concat(t,", (dist - adjustedBorderSize_").concat(t,` + aaBorder) / aaBorder);
  } else if (dist > adjustedBorderSize_`).concat(t+1,`) {
    gl_FragColor = borderColor_`).concat(t+1,`;
  } else `)}).join(""),` { /* Nothing to add here */ }
  #endif
}
`);return n}function hr(r){var e=r.borders,o=`
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
`.concat(e.flatMap(function(n,a){var t=n.size;return"attribute"in t?["attribute float a_borderSize_".concat(a+1,";"),"varying float v_borderSize_".concat(a+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(n,a){var t=n.color;return"attribute"in t?["attribute vec4 a_borderColor_".concat(a+1,";"),"varying vec4 v_borderColor_".concat(a+1,";")]:[]}).join(`
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
`).concat(e.flatMap(function(n,a){var t=n.size;return"attribute"in t?["  v_borderSize_".concat(a+1," = a_borderSize_").concat(a+1,";")]:[]}).join(`
`),`
`).concat(e.flatMap(function(n,a){var t=n.color;return"attribute"in t?["  v_borderColor_".concat(a+1," = a_borderColor_").concat(a+1,";")]:[]}).join(`
`),`
  #endif
}
`);return o}var M=WebGLRenderingContext,P=M.UNSIGNED_BYTE,g=M.FLOAT;function x(r){var e,o=R(R({},vr),r||{}),n=o.borders,a=o.drawLabel,t=o.drawHover,i=["u_sizeRatio","u_correctionRatio","u_matrix"].concat(C(n.flatMap(function(l,s){var d=l.color;return"value"in d?["u_borderColor_".concat(s+1)]:[]})));return e=function(l){dr(s,l);function s(){var d;ir(this,s);for(var f=arguments.length,u=new Array(f),c=0;c<f;c++)u[c]=arguments[c];return d=fr(this,s,[].concat(u)),_(O(d),"drawLabel",a),_(O(d),"drawHover",t),d}return sr(s,[{key:"getDefinition",value:function(){return{VERTICES:3,VERTEX_SHADER_SOURCE:hr(o),FRAGMENT_SHADER_SOURCE:gr(o),METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:i,ATTRIBUTES:[{name:"a_position",size:2,type:g},{name:"a_id",size:4,type:P,normalized:!0},{name:"a_size",size:1,type:g}].concat(C(n.flatMap(function(f,u){var c=f.color;return"attribute"in c?[{name:"a_borderColor_".concat(u+1),size:4,type:P,normalized:!0}]:[]})),C(n.flatMap(function(f,u){var c=f.size;return"attribute"in c?[{name:"a_borderSize_".concat(u+1),size:1,type:g}]:[]}))),CONSTANT_ATTRIBUTES:[{name:"a_angle",size:1,type:g}],CONSTANT_DATA:[[s.ANGLE_1],[s.ANGLE_2],[s.ANGLE_3]]}}},{key:"processVisibleItem",value:function(f,u,c){var b=this.array;b[u++]=c.x,b[u++]=c.y,b[u++]=f,b[u++]=c.size,n.forEach(function(m){var p=m.color;"attribute"in p&&(b[u++]=Z(c[p.attribute]||p.defaultValue||yr))}),n.forEach(function(m){var p=m.size;"attribute"in p&&(b[u++]=c[p.attribute]||p.defaultValue)})}},{key:"setUniforms",value:function(f,u){var c=u.gl,b=u.uniformLocations,m=b.u_sizeRatio,p=b.u_correctionRatio,F=b.u_matrix;c.uniform1f(p,f.correctionRatio),c.uniform1f(m,f.sizeRatio),c.uniformMatrix3fv(F,!1,f.matrix),n.forEach(function(V,U){var w=V.color;if("value"in w){var H=b["u_borderColor_".concat(U+1)],k=$(w.value),v=ar(k,4),K=v[0],W=v[1],Y=v[2],q=v[3];c.uniform4f(H,K/255,W/255,Y/255,q/255)}})}}]),s}(X),_(e,"ANGLE_1",0),_(e,"ANGLE_2",2*Math.PI/3),_(e,"ANGLE_3",4*Math.PI/3),e}x();const Sr={allowInvalidContainer:!0,defaultNodeType:"bordered",nodeProgramClasses:{bordered:x({borders:[{size:{attribute:"borderSize",defaultValue:0},color:{attribute:"borderColor"}},{size:{fill:!0},color:{attribute:"color"}}]})}},G=({style:r})=>y.jsxs(J,{style:r,settings:Sr,children:[y.jsx(er,{}),y.jsx(Q,{position:"bottom-right",children:y.jsx(rr,{})})]});G.__docgenInfo={description:"",methods:[],displayName:"NodeBorder",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Cr=`import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { createNodeBorderProgram } from '@sigma/node-border';
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
  defaultNodeType: 'bordered',
  nodeProgramClasses: {
    bordered: createNodeBorderProgram({
      borders: [
        { size: { attribute: 'borderSize', defaultValue: 0 }, color: { attribute: 'borderColor' } },
        { size: { fill: true }, color: { attribute: 'color' } },
      ],
    }),
  },
};

export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,Lr={component:G,id:"node-border",title:"Sigma programs"},h={name:"Node with borders",args:{},parameters:{storySource:{source:Cr}}};var T,A,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Node with borders',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(L=(A=h.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const Br=["Default"];export{h as Default,Br as __namedExportsOrder,Lr as default};
