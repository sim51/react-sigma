import{f as se,E as ue,a as ce,j as H,x as me,M as $,C as fe}from"./react-sigma.min-BhnHEgVU.js";import{r as Q}from"./index-Dl6G-zuu.js";import{u as ge}from"./useRandom-BD5vX7bR.js";function pe(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ve(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function J(e){var n=ve(e,"string");return typeof n=="symbol"?n:String(n)}function Y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}function be(e,n,t){return n&&Y(e.prototype,n),t&&Y(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(e)}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Z=function(){return!!e})()}function ee(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ee(e)}function xe(e,n,t){return n=C(n),ye(e,Z()?Reflect.construct(n,t||[],C(e).constructor):n.apply(e,t))}function N(e,n){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},N(e,n)}function he(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&N(e,n)}function ne(e,n,t){return n=J(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?q(Object(t),!0).forEach(function(r){ne(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var k=.25,_e={edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"};function Ee(e,n){var t=K(K({},_e),n||{}),r={},a={},i={},l=0;e.forEachNode(function(f){r[f]=++l+""}),e.forEachEdge(function(f,v,h,_){var b=r[h],y=r[_],E=[b,y].join("-");a[f]=E,i[E]=[b,y].sort().join("-")});var d={},g={};e.forEachEdge(function(f){var v=a[f],h=i[v];d[v]=d[v]||[],d[v].push(f),g[h]=g[h]||[],g[h].push(f)});for(var x in d){var o=d[x],u=o.length,p=g[i[x]].length;if(u===1&&p===1){var c=o[0];e.setEdgeAttribute(c,t.edgeIndexAttribute,null),e.setEdgeAttribute(c,t.edgeMaxIndexAttribute,null)}else if(u===1){var m=o[0];e.setEdgeAttribute(m,t.edgeIndexAttribute,0),e.setEdgeAttribute(m,t.edgeMaxIndexAttribute,1)}else for(var s=0;s<u;s++){var T=o[s];e.setEdgeAttribute(T,t.edgeIndexAttribute,s),e.setEdgeAttribute(T,t.edgeMaxIndexAttribute,u)}}}function re(e,n,t,r){var a=Math.pow(1-e,2)*n.x+2*(1-e)*e*t.x+Math.pow(e,2)*r.x,i=Math.pow(1-e,2)*n.y+2*(1-e)*e*t.y+Math.pow(e,2)*r.y;return{x:a,y:i}}function Se(e,n,t){for(var r=20,a=0,i=e,l=0;l<r;l++){var d=re((l+1)/r,e,n,t);a+=Math.sqrt(Math.pow(i.x-d.x,2)+Math.pow(i.y-d.y,2)),i=d}return a}function Oe(e,n,t,r,a){var i=a.edgeLabelSize,l=n.curvature||k,d=a.edgeLabelFont,g=a.edgeLabelWeight,x=a.edgeLabelColor.attribute?n[a.edgeLabelColor.attribute]||a.edgeLabelColor.color||"#000":a.edgeLabelColor.color,o=n.label;if(o){e.fillStyle=x,e.font="".concat(g," ").concat(i,"px ").concat(d);var u=t.x,p=t.y,c=r.x,m=r.y,s=(u+c)/2,T=(p+m)/2,f=c-u,v=m-p,h=Math.sqrt(Math.pow(f,2)+Math.pow(v,2)),_=s+v*l,b=T-f*l,y=n.size*.7+5,E={x:b-p,y:-(_-u)},L=Math.sqrt(Math.pow(E.x,2)+Math.pow(E.y,2)),w={x:m-b,y:-(c-_)},G=Math.sqrt(Math.pow(w.x,2)+Math.pow(w.y,2));u+=y*E.x/L,p+=y*E.y/L,c+=y*w.x/G,m+=y*w.y/G,_+=y*v/h,b-=y*f/h;var j={x:_,y:b},D={x:u,y:p},U={x:c,y:m},z=Se(D,j,U);if(!(z<t.size+r.size)){var I=e.measureText(o).width,F=z-t.size-r.size;if(I>F){var V="…";for(o=o+V,I=e.measureText(o).width;I>F&&o.length>1;)o=o.slice(0,-2)+V,I=e.measureText(o).width;if(o.length<4)return}for(var R={},A=0,ae=o.length;A<ae;A++){var M=o[A];R[M]||(R[M]=e.measureText(M).width*(1+l*.35))}for(var S=.5-I/z/2,P=0,ie=o.length;P<ie;P++){var B=o[P],X=re(S,D,j,U),oe=2*(1-S)*(_-u)+2*S*(c-_),le=2*(1-S)*(b-p)+2*S*(m-b),de=Math.atan2(le,oe);e.save(),e.translate(X.x,X.y),e.rotate(de),e.fillText(B,0,0),e.restore(),S+=R[B]/z}}}}var Ie=`
precision highp float;

varying vec4 v_color;
varying float v_thickness;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;

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

const float epsilon = 0.7;
const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float dist = distToQuadraticBezierCurve(gl_FragCoord.xy, v_cpA, v_cpB, v_cpC);

  if (dist < v_thickness + epsilon) {
    #ifdef PICKING_MODE
    gl_FragColor = v_color;
    #else
    float inCurve = 1.0 - smoothstep(v_thickness - epsilon, v_thickness + epsilon, dist);
    gl_FragColor = inCurve * vec4(v_color.rgb * v_color.a, v_color.a);
    #endif
  } else {
    gl_FragColor = transparent;
  }
}
`,Te=Ie,we=`
attribute vec4 a_id;
attribute vec4 a_color;
attribute float a_direction;
attribute float a_thickness;
attribute vec2 a_source;
attribute vec2 a_target;
attribute float a_current;
attribute float a_curvature;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform vec2 u_dimensions;

varying vec4 v_color;
varying float v_thickness;
varying vec2 v_cpA;
varying vec2 v_cpB;
varying vec2 v_cpC;

const float bias = 255.0 / 254.0;
const float epsilon = 0.7;
const float minThickness = 0.3;

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
  float curveThickness = max(minThickness, a_thickness / 2.0 / u_sizeRatio * u_pixelRatio);

  v_thickness = curveThickness;

  v_cpA = viewportSource;
  v_cpB = 0.5 * (viewportSource + viewportTarget) + unitNormal * a_direction * boundingBoxThickness;
  v_cpC = viewportTarget;

  vec2 viewportOffsetPosition = (
    viewportPosition +
    unitNormal * (boundingBoxThickness / 2.0 + curveThickness + epsilon) *
    max(0.0, a_direction) // NOTE: cutting the bounding box in half to avoid overdraw
  );

  position = viewportToClipspace(viewportOffsetPosition, u_dimensions);
  gl_Position = vec4(position, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`,ze=we,te=WebGLRenderingContext,W=te.UNSIGNED_BYTE,O=te.FLOAT,Ce=["u_matrix","u_sizeRatio","u_dimensions","u_pixelRatio"],ke=function(e){he(n,e);function n(){var t;pe(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=xe(this,n,[].concat(a)),ne(ee(t),"drawLabel",Oe),t}return be(n,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:ze,FRAGMENT_SHADER_SOURCE:Te,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:Ce,ATTRIBUTES:[{name:"a_source",size:2,type:O},{name:"a_target",size:2,type:O},{name:"a_thickness",size:1,type:O},{name:"a_curvature",size:1,type:O},{name:"a_color",size:4,type:W,normalized:!0},{name:"a_id",size:4,type:W,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:"a_current",size:1,type:O},{name:"a_direction",size:1,type:O}],CONSTANT_DATA:[[0,1],[0,-1],[1,1],[0,-1],[1,1],[1,-1]]}}},{key:"processVisibleItem",value:function(r,a,i,l,d){var g=d.size||1,x=i.x,o=i.y,u=l.x,p=l.y,c=se(d.color),m=typeof d.curvature=="number"?d.curvature:k,s=this.array;s[a++]=x,s[a++]=o,s[a++]=u,s[a++]=p,s[a++]=g,s[a++]=m,s[a++]=c,s[a++]=r}},{key:"setUniforms",value:function(r,a){var i=a.gl,l=a.uniformLocations,d=l.u_matrix,g=l.u_pixelRatio,x=l.u_sizeRatio,o=l.u_dimensions;i.uniformMatrix3fv(d,!1,r.matrix),i.uniform1f(g,r.pixelRatio),i.uniform1f(x,r.sizeRatio),i.uniform2f(o,r.width*r.pixelRatio,r.height*r.pixelRatio)}}]),n}(ue);const Re=()=>{const{faker:e,randomColor:n}=ge(),t=fe();return Q.useEffect(()=>{const r=new $;r.addNode("a",{x:0,y:0,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("b",{x:1,y:-1,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("c",{x:3,y:-2,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("d",{x:1,y:-3,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("e",{x:3,y:-4,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addNode("f",{x:4,y:-5,size:e.number.int({min:4,max:20}),color:n(),label:e.person.fullName()}),r.addEdge("a","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("b","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("b","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("c","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("c","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("e","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("e","f",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),r.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),Ee(r,{edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"}),r.forEachEdge((a,{parallelIndex:i,parallelMaxIndex:l})=>{typeof i=="number"?r.mergeEdgeAttributes(a,{type:"curved",curvature:k+3*k*i/(l||1)}):r.setEdgeAttribute(a,"type","straight")}),t(r)},[t,e,n]),null},Ae=({style:e})=>{const n=Q.useMemo(()=>({allowInvalidContainer:!0,renderEdgeLabels:!0,defaultEdgeType:"straight",edgeProgramClasses:{straight:ce,curved:ke}}),[]);return H.jsx(me,{style:e,graph:$,settings:n,children:H.jsx(Re,{})})};Ae.__docgenInfo={description:"",methods:[],displayName:"MultiDirectedGraph",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Le=`import { FC, useEffect, useMemo, CSSProperties } from "react";
import { MultiDirectedGraph as MultiGraphConstructor } from "graphology";
import EdgeCurveProgram, { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from "@sigma/edge-curve";
import { EdgeArrowProgram } from "sigma/rendering";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

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

    graph.addNode("a", {
      x: 0,
      y: 0,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("b", {
      x: 1,
      y: -1,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("c", {
      x: 3,
      y: -2,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("d", {
      x: 1,
      y: -3,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("e", {
      x: 3,
      y: -4,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("f", {
      x: 4,
      y: -5,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });

    graph.addEdge("a", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("b", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("b", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("c", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("c", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("e", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("e", "f", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });

    // Use dedicated helper to identify parallel edges:
    indexParallelEdgesIndex(graph, { edgeIndexAttribute: "parallelIndex", edgeMaxIndexAttribute: "parallelMaxIndex" });

    // Adapt types and curvature of parallel edges for rendering:
    graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {
      if (typeof parallelIndex === "number") {
        graph.mergeEdgeAttributes(edge, {
          type: "curved",
          curvature: DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),
        });
      } else {
        graph.setEdgeAttribute(edge, "type", "straight");
      }
    });

    // load the graph in sigma
    loadGraph(graph);
  }, [loadGraph, faker, randomColor]);

  return null;
};

export const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Memo sigma settings to avoid re-render sigma at each component render
  const settings = useMemo(
    () => ({
      allowInvalidContainer: true,
      renderEdgeLabels: true,
      defaultEdgeType: "straight",
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
`;export{Ae as M,Le as s};
