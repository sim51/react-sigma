import{j as re}from"./jsx-runtime-CLpGMVip.js";import{a as ie,E as ye,f as _e,b as xe,S as Ee,M as oe,C as Se}from"./style-Bs0cF8GC.js";import{r as ue}from"./index-nBX9XC1j.js";import{u as Te}from"./useRandom-B-rp2XRI.js";function we(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function se(e){var n=we(e,"string");return typeof n=="symbol"?n:n+""}function le(e,n,t){return(n=se(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?te(Object(t),!0).forEach(function(r){le(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ke(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Ae(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,se(r.key),r)}}function ze(e,n,t){return Ae(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},G(e)}function de(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(de=function(){return!!e})()}function ce(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(e)}function Ie(e,n,t){return n=G(n),Oe(e,de()?Reflect.construct(n,t,G(e).constructor):n.apply(e,t))}function B(e,n){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},B(e,n)}function Re(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),B(e,n)}function X(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function Ce(e){if(Array.isArray(e))return X(e)}function Pe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Me(e,n){if(e){if(typeof e=="string")return X(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?X(e,n):void 0}}function Ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(e){return Ce(e)||Pe(e)||Me(e)||Ne()}function fe(e,n,t,r){var s=Math.pow(1-e,2)*n.x+2*(1-e)*e*t.x+Math.pow(e,2)*r.x,i=Math.pow(1-e,2)*n.y+2*(1-e)*e*t.y+Math.pow(e,2)*r.y;return{x:s,y:i}}function Le(e,n,t){for(var r=20,s=0,i=e,m=0;m<r;m++){var l=fe((m+1)/r,e,n,t);s+=Math.sqrt(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2)),i=l}return s}function Ge(e){var n=e.curvatureAttribute,t=e.defaultCurvature,r=e.keepLabelUpright,s=r===void 0?!0:r;return function(i,m,l,p,E){var h=E.edgeLabelSize,d=m[n]||t,c=E.edgeLabelFont,u=E.edgeLabelWeight,o=E.edgeLabelColor.attribute?m[E.edgeLabelColor.attribute]||E.edgeLabelColor.color||"#000":E.edgeLabelColor.color,a=m.label;if(a){i.fillStyle=o,i.font="".concat(u," ").concat(h,"px ").concat(c);var y=!s||l.x<p.x,f=y?l.x:p.x,b=y?l.y:p.y,S=y?p.x:l.x,g=y?p.y:l.y,A=(f+S)/2,_=(b+g)/2,x=S-f,T=g-b,v=Math.sqrt(Math.pow(x,2)+Math.pow(T,2)),C=y?1:-1,w=A+T*d*C,k=_-x*d*C,O=m.size*.7+5,M={x:k-b,y:-(w-f)},W=Math.sqrt(Math.pow(M.x,2)+Math.pow(M.y,2)),N={x:g-k,y:-(S-w)},q=Math.sqrt(Math.pow(N.x,2)+Math.pow(N.y,2));f+=O*M.x/W,b+=O*M.y/W,S+=O*N.x/q,g+=O*N.y/q,w+=O*T/v,k-=O*x/v;var K={x:w,y:k},$={x:f,y:b},Q={x:S,y:g},L=Le($,K,Q);if(!(L<l.size+p.size)){var P=i.measureText(a).width,J=L-l.size-p.size;if(P>J){var Z="…";for(a=a+Z,P=i.measureText(a).width;P>J&&a.length>1;)a=a.slice(0,-2)+Z,P=i.measureText(a).width;if(a.length<4)return}for(var U={},D=0,ge=a.length;D<ge;D++){var F=a[D];U[F]||(U[F]=i.measureText(F).width*(1+d*.35))}for(var I=.5-P/L/2,H=0,ve=a.length;H<ve;H++){var ee=a[H],ne=fe(I,$,K,Q),pe=2*(1-I)*(w-f)+2*I*(S-w),be=2*(1-I)*(k-b)+2*I*(g-k),he=Math.atan2(be,pe);i.save(),i.translate(ne.x,ne.y),i.rotate(he),i.fillText(ee,0,0),i.restore(),I+=U[ee]/L}}}}}function je(e){var n=e.arrowHead,t=(n==null?void 0:n.extremity)==="target"||(n==null?void 0:n.extremity)==="both",r=(n==null?void 0:n.extremity)==="source"||(n==null?void 0:n.extremity)==="both",s=`
precision highp float;

varying vec4 v_color;
varying float v_thickness;
varying float v_feather;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;
`.concat(t?`
varying float v_targetSize;
varying vec2 v_targetPoint;`:"",`
`).concat(r?`
varying float v_sourceSize;
varying vec2 v_sourcePoint;`:"",`
`).concat(n?`
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;`:"",`

float det(vec2 a, vec2 b) {
  return a.x * b.y - b.x * a.y;
}

vec2 getDistanceVector(vec2 b0, vec2 b1, vec2 b2) {
  float a = det(b0, b2), b = 2.0 * det(b1, b0), d = 2.0 * det(b2, b1);
  float f = b * d - a * a;
  vec2 d21 = b2 - b1, d10 = b1 - b0, d20 = b2 - b0;
  vec2 gf = 2.0 * (b * d21 + d * d10 + a * d20);
  gf = vec2(gf.y, -gf.x);
  vec2 pp = -f * gf / dot(gf, gf);
  vec2 d0p = b0 - pp;
  float ap = det(d0p, d20), bp = 2.0 * det(d10, d0p);
  float t = clamp((ap + bp) / (2.0 * a + b + d), 0.0, 1.0);
  return mix(mix(b0, b1, t), mix(b1, b2, t), t);
}

float distToQuadraticBezierCurve(vec2 p, vec2 b0, vec2 b1, vec2 b2) {
  return length(getDistanceVector(b0 - p, b1 - p, b2 - p));
}

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);
  float thickness = v_thickness;
`).concat(t?`
  float distToTarget = length(gl_FragCoord.xy - v_targetPoint);
  float targetArrowLength = v_targetSize + thickness * u_lengthToThicknessRatio;
  if (distToTarget < targetArrowLength) {
    thickness = (distToTarget - v_targetSize) / (targetArrowLength - v_targetSize) * u_widenessToThicknessRatio * thickness;
  }`:"",`
`).concat(r?`
  float distToSource = length(gl_FragCoord.xy - v_sourcePoint);
  float sourceArrowLength = v_sourceSize + thickness * u_lengthToThicknessRatio;
  if (distToSource < sourceArrowLength) {
    thickness = (distToSource - v_sourceSize) / (sourceArrowLength - v_sourceSize) * u_widenessToThicknessRatio * thickness;
  }`:"",`

  float halfThickness = thickness / 2.0;
  if (dist < halfThickness) {
    #ifdef PICKING_MODE
    gl_FragColor = v_color;
    #else
    float t = smoothstep(
      halfThickness - v_feather,
      halfThickness,
      dist
    );

    gl_FragColor = mix(v_color, transparent, t);
    #endif
  } else {
    gl_FragColor = transparent;
  }
}
`);return s}function Ue(e){var n=e.arrowHead,t=(n==null?void 0:n.extremity)==="target"||(n==null?void 0:n.extremity)==="both",r=(n==null?void 0:n.extremity)==="source"||(n==null?void 0:n.extremity)==="both",s=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute float a_direction;
attribute float a_thickness;
attribute vec2 a_source;
attribute vec2 a_target;
attribute float a_current;
attribute float a_curvature;
`.concat(t?`attribute float a_targetSize;
`:"",`
`).concat(r?`attribute float a_sourceSize;
`:"",`

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform vec2 u_dimensions;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying float v_thickness;
varying float v_feather;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;
`).concat(t?`
varying float v_targetSize;
varying vec2 v_targetPoint;`:"",`
`).concat(r?`
varying float v_sourceSize;
varying vec2 v_sourcePoint;`:"",`
`).concat(n?`
uniform float u_widenessToThicknessRatio;`:"",`

const float bias = 255.0 / 254.0;
const float epsilon = 0.7;

vec2 clipspaceToViewport(vec2 pos, vec2 dimensions) {
  return vec2(
    (pos.x + 1.0) * dimensions.x / 2.0,
    (pos.y + 1.0) * dimensions.y / 2.0
  );
}

vec2 viewportToClipspace(vec2 pos, vec2 dimensions) {
  return vec2(
    pos.x / dimensions.x * 2.0 - 1.0,
    pos.y / dimensions.y * 2.0 - 1.0
  );
}

void main() {
  float minThickness = u_minEdgeThickness;

  // Selecting the correct position
  // Branchless "position = a_source if a_current == 1.0 else a_target"
  vec2 position = a_source * max(0.0, a_current) + a_target * max(0.0, 1.0 - a_current);
  position = (u_matrix * vec3(position, 1)).xy;

  vec2 source = (u_matrix * vec3(a_source, 1)).xy;
  vec2 target = (u_matrix * vec3(a_target, 1)).xy;

  vec2 viewportPosition = clipspaceToViewport(position, u_dimensions);
  vec2 viewportSource = clipspaceToViewport(source, u_dimensions);
  vec2 viewportTarget = clipspaceToViewport(target, u_dimensions);

  vec2 delta = viewportTarget.xy - viewportSource.xy;
  float len = length(delta);
  vec2 normal = vec2(-delta.y, delta.x) * a_direction;
  vec2 unitNormal = normal / len;
  float boundingBoxThickness = len * a_curvature;

  float curveThickness = max(minThickness, a_thickness / u_sizeRatio);
  v_thickness = curveThickness * u_pixelRatio;
  v_feather = u_feather;

  v_cpA = viewportSource;
  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;
  v_cpC = viewportTarget;

  vec2 viewportOffsetPosition = (
    viewportPosition +
    unitNormal * (boundingBoxThickness / 2.0 + sign(boundingBoxThickness) * (`).concat(n?"curveThickness * u_widenessToThicknessRatio":"curveThickness",` + epsilon)) *
    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw
  );

  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);
  gl_Position = vec4(position, 0, 1);
    
`).concat(t?`
  v_targetSize = a_targetSize * u_pixelRatio / u_sizeRatio;
  v_targetPoint = viewportTarget;
`:"",`
`).concat(r?`
  v_sourceSize = a_sourceSize * u_pixelRatio / u_sizeRatio;
  v_sourcePoint = viewportSource;
`:"",`

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`);return s}var j=.25,De={arrowHead:null,curvatureAttribute:"curvature",defaultCurvature:j},Fe={edgeIndexAttribute:"parallelIndex",edgeMinIndexAttribute:"parallelMinIndex",edgeMaxIndexAttribute:"parallelMaxIndex"};function He(e,n){var t=R(R({},Fe),n),r={},s={},i={},m=0;e.forEachNode(function(_){r[_]=++m+""}),e.forEachEdge(function(_,x,T,v){var C=r[T],w=r[v],k=[C,w].join("-");s[_]=k,i[k]=[C,w].sort().join("-")});var l={},p={};e.forEachEdge(function(_){var x=s[_],T=i[x];l[x]=l[x]||[],l[x].push(_),p[T]=p[T]||[],p[T].push(_)});for(var E in l){var h=l[E],d=h.length,c=p[i[E]].length;if(d===1&&c===1){var u=h[0];e.setEdgeAttribute(u,t.edgeIndexAttribute,null),e.setEdgeAttribute(u,t.edgeMaxIndexAttribute,null)}else if(d===1){var o=h[0];e.setEdgeAttribute(o,t.edgeIndexAttribute,1),e.setEdgeAttribute(o,t.edgeMaxIndexAttribute,1)}else if(d===c)for(var a=(d-1)/2,y=-a,f=0;f<d;f++){var b=h[f],S=-(d-1)/2+f;e.setEdgeAttribute(b,t.edgeIndexAttribute,S),e.setEdgeAttribute(b,t.edgeMinIndexAttribute,y),e.setEdgeAttribute(b,t.edgeMaxIndexAttribute,a)}else for(var g=0;g<d;g++){var A=h[g];e.setEdgeAttribute(A,t.edgeIndexAttribute,g+1),e.setEdgeAttribute(A,t.edgeMaxIndexAttribute,d)}}}var me=WebGLRenderingContext,ae=me.UNSIGNED_BYTE,z=me.FLOAT;function Y(e){var n=R(R({},De),e||{}),t=n,r=t.arrowHead,s=t.curvatureAttribute,i=t.drawLabel,m=(r==null?void 0:r.extremity)==="target"||(r==null?void 0:r.extremity)==="both",l=(r==null?void 0:r.extremity)==="source"||(r==null?void 0:r.extremity)==="both",p=["u_matrix","u_sizeRatio","u_dimensions","u_pixelRatio","u_feather","u_minEdgeThickness"].concat(V(r?["u_lengthToThicknessRatio","u_widenessToThicknessRatio"]:[]));return function(E){Re(h,E);function h(){var d;ke(this,h);for(var c=arguments.length,u=new Array(c),o=0;o<c;o++)u[o]=arguments[o];return d=Ie(this,h,[].concat(u)),le(ce(d),"drawLabel",i||Ge(n)),d}return ze(h,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:Ue(n),FRAGMENT_SHADER_SOURCE:je(n),METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:p,ATTRIBUTES:[{name:"a_source",size:2,type:z},{name:"a_target",size:2,type:z}].concat(V(m?[{name:"a_targetSize",size:1,type:z}]:[]),V(l?[{name:"a_sourceSize",size:1,type:z}]:[]),[{name:"a_thickness",size:1,type:z},{name:"a_curvature",size:1,type:z},{name:"a_color",size:4,type:ae,normalized:!0},{name:"a_id",size:4,type:ae,normalized:!0}]),CONSTANT_ATTRIBUTES:[{name:"a_current",size:1,type:z},{name:"a_direction",size:1,type:z}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[0,-1],[1,1],[1,-1]]}}},{key:"processVisibleItem",value:function(c,u,o,a,y){var f,b=y.size||1,S=o.x,g=o.y,A=a.x,_=a.y,x=_e(y.color),T=(f=y[s])!==null&&f!==void 0?f:j,v=this.array;v[u++]=S,v[u++]=g,v[u++]=A,v[u++]=_,m&&(v[u++]=a.size),l&&(v[u++]=o.size),v[u++]=b,v[u++]=T,v[u++]=x,v[u++]=c}},{key:"setUniforms",value:function(c,u){var o=u.gl,a=u.uniformLocations,y=a.u_matrix,f=a.u_pixelRatio,b=a.u_feather,S=a.u_sizeRatio,g=a.u_dimensions,A=a.u_minEdgeThickness;if(o.uniformMatrix3fv(y,!1,c.matrix),o.uniform1f(f,c.pixelRatio),o.uniform1f(S,c.sizeRatio),o.uniform1f(b,c.antiAliasingFeather),o.uniform2f(g,c.width*c.pixelRatio,c.height*c.pixelRatio),o.uniform1f(A,c.minEdgeThickness),r){var _=a.u_lengthToThicknessRatio,x=a.u_widenessToThicknessRatio;o.uniform1f(_,r.lengthToThicknessRatio),o.uniform1f(x,r.widenessToThicknessRatio)}}}]),h}(ye)}var Ve=Y();Y({arrowHead:ie});Y({arrowHead:R(R({},ie),{},{extremity:"both"})});const Be=()=>{const{faker:e,randomColor:n}=Te(),t=Se();return ue.useEffect(()=>{const r=new oe;r.addNode("a",{x:0,y:0,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("b",{x:1,y:-1,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("c",{x:3,y:-2,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("d",{x:1,y:-3,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("e",{x:3,y:-4,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("f",{x:4,y:-5,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addEdge("a","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("b","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("b","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("c","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("c","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("e","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("e","f",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),He(r,{edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"}),r.forEachEdge((s,{parallelIndex:i,parallelMaxIndex:m})=>{typeof i=="number"?r.mergeEdgeAttributes(s,{type:"curved",curvature:j+3*j*i/(m||1)}):r.setEdgeAttribute(s,"type","straight")}),t(r)},[t,e,n]),null},Xe=({style:e})=>{const n=ue.useMemo(()=>({allowInvalidContainer:!0,renderEdgeLabels:!0,defaultEdgeType:"straight",edgeProgramClasses:{straight:xe,curved:Ve}}),[]);return re.jsx(Ee,{style:e,graph:oe,settings:n,children:re.jsx(Be,{})})};Xe.__docgenInfo={description:"",methods:[],displayName:"MultiDirectedGraph",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const $e=`import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import EdgeCurveProgram, { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from '@sigma/edge-curve';
import { MultiDirectedGraph as MultiGraphConstructor } from 'graphology';
import { CSSProperties, FC, useEffect, useMemo } from 'react';
import { EdgeArrowProgram } from 'sigma/rendering';

import { useRandom } from './common/useRandom';

interface NodeType {
  x: number;
  y: number;
  label: string;
  size: number;
  color: string;
}
interface EdgeType {
  type?: string;
  label?: string;
  size?: number;
  curvature?: number;
  parallelIndex?: number;
  parallelMaxIndex?: number;
}

const MyGraph: React.FC = () => {
  const { faker, randomColor } = useRandom();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();

  useEffect(() => {
    // Create the graph
    const graph = new MultiGraphConstructor<NodeType, EdgeType>();

    graph.addNode('a', {
      x: 0,
      y: 0,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('b', {
      x: 1,
      y: -1,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('c', {
      x: 3,
      y: -2,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('d', {
      x: 1,
      y: -3,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('e', {
      x: 3,
      y: -4,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('f', {
      x: 4,
      y: -5,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });

    graph.addEdge('a', 'b', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('b', 'c', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('b', 'd', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('c', 'b', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('c', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('d', 'c', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('d', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('d', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('d', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('d', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('e', 'd', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('e', 'f', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('f', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge('f', 'e', { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });

    // Use dedicated helper to identify parallel edges:
    indexParallelEdgesIndex(graph, { edgeIndexAttribute: 'parallelIndex', edgeMaxIndexAttribute: 'parallelMaxIndex' });

    // Adapt types and curvature of parallel edges for rendering:
    graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {
      if (typeof parallelIndex === 'number') {
        graph.mergeEdgeAttributes(edge, {
          type: 'curved',
          curvature: DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),
        });
      } else {
        graph.setEdgeAttribute(edge, 'type', 'straight');
      }
    });

    // load the graph in sigma
    loadGraph(graph);
  }, [loadGraph, faker, randomColor]);

  return null;
};

export const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Sigma settings
  const settings = useMemo(
    () => ({
      allowInvalidContainer: true,
      renderEdgeLabels: true,
      defaultEdgeType: 'straight',
      edgeProgramClasses: {
        straight: EdgeArrowProgram,
        curved: EdgeCurveProgram,
      },
    }),
    [],
  );

  return (
    <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} settings={settings}>
      <MyGraph />
    </SigmaContainer>
  );
};
`;export{Xe as M,$e as s};
