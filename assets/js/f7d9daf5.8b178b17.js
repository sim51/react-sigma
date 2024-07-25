(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[2881],{2939:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=a(1085),r=a(1184),i=(a(6704),a(5694));const o='import { FC, useEffect, CSSProperties } from "react";\nimport { MultiDirectedGraph } from "graphology";\n\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nconst MyGraph: FC = () => {\n  const loadGraph = useLoadGraph();\n\n  useEffect(() => {\n    // Create the graph\n    const graph = new MultiDirectedGraph();\n    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n    loadGraph(graph);\n  }, [loadGraph]);\n\n  return null;\n};\n\nexport const LoadGraphWithHook: FC<{ style?: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n',l='import { FC, CSSProperties } from "react";\nimport { MultiDirectedGraph } from "graphology";\n\nimport { SigmaContainer } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nexport const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {\n  // Create the graph\n  const graph = new MultiDirectedGraph();\n  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n\n  return <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }}></SigmaContainer>;\n};\n',s='import { FC, useEffect, useMemo, CSSProperties } from "react";\nimport { MultiDirectedGraph as MultiGraphConstructor } from "graphology";\nimport EdgeCurveProgram, { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from "@sigma/edge-curve";\nimport { EdgeArrowProgram } from "sigma/rendering";\n\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nimport { useRandom } from "./common/useRandom";\n\ninterface NodeType {\n  x: number;\n  y: number;\n  label: string;\n  size: number;\n  color: string;\n}\ninterface EdgeType {\n  type?: string;\n  label?: string;\n  size?: number;\n  curvature?: number;\n  parallelIndex?: number;\n  parallelMaxIndex?: number;\n}\n\nconst MyGraph: React.FC = () => {\n  const { faker, randomColor } = useRandom();\n  const loadGraph = useLoadGraph<NodeType, EdgeType>();\n\n  useEffect(() => {\n    // Create the graph\n    const graph = new MultiGraphConstructor<NodeType, EdgeType>();\n\n    graph.addNode("a", {\n      x: 0,\n      y: 0,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("b", {\n      x: 1,\n      y: -1,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("c", {\n      x: 3,\n      y: -2,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("d", {\n      x: 1,\n      y: -3,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("e", {\n      x: 3,\n      y: -4,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("f", {\n      x: 4,\n      y: -5,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n\n    graph.addEdge("a", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("b", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("b", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("c", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("c", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("e", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("e", "f", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n\n    // Use dedicated helper to identify parallel edges:\n    indexParallelEdgesIndex(graph, { edgeIndexAttribute: "parallelIndex", edgeMaxIndexAttribute: "parallelMaxIndex" });\n\n    // Adapt types and curvature of parallel edges for rendering:\n    graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {\n      if (typeof parallelIndex === "number") {\n        graph.mergeEdgeAttributes(edge, {\n          type: "curved",\n          curvature: DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),\n        });\n      } else {\n        graph.setEdgeAttribute(edge, "type", "straight");\n      }\n    });\n\n    // load the graph in sigma\n    loadGraph(graph);\n  }, [loadGraph, faker, randomColor]);\n\n  return null;\n};\n\nexport const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => {\n  // Sigma settings\n  const settings = useMemo(\n    () => ({\n      allowInvalidContainer: true,\n      renderEdgeLabels: true,\n      defaultEdgeType: "straight",\n      edgeProgramClasses: {\n        straight: EdgeArrowProgram,\n        curved: EdgeCurveProgram,\n      },\n    }),\n    [],\n  );\n\n  return (\n    <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} settings={settings}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n',d={},c="Load a graph",m={id:"example/load-graph",title:"Load a graph",description:"Graph property on SigmaContainer",source:"@site/docs/example/01_load-graph.mdx",sourceDirName:"example",slug:"/example/load-graph",permalink:"/react-sigma/docs/example/load-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/01_load-graph.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Function: useLayoutRandom()",permalink:"/react-sigma/docs/api/layout-random/functions/useLayoutRandom"},next:{title:"Events",permalink:"/react-sigma/docs/example/events"}},u={},g=[{value:"Graph property on <strong>SigmaContainer</strong>",id:"graph-property-on-sigmacontainer",level:2},{value:"By using <strong>useLoadGraph</strong>",id:"by-using-useloadgraph",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"load-a-graph",children:"Load a graph"}),"\n",(0,n.jsxs)(t.h2,{id:"graph-property-on-sigmacontainer",children:["Graph property on ",(0,n.jsx)(t.strong,{children:"SigmaContainer"})]}),"\n",(0,n.jsxs)(t.p,{children:["Component ",(0,n.jsx)(t.code,{children:"SigmaContainer"})," can take a ",(0,n.jsx)(t.code,{children:"graph"})," property which is either a graph instance or a graph constructor."]}),"\n",(0,n.jsx)(t.p,{children:"So you can use it to load your graph."}),"\n",(0,n.jsx)(i.O,{code:l,title:"Loading a graph via the graph property",component:()=>{const{LoadGraphWithProp:e}=a(7415);return(0,n.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,n.jsxs)(t.h2,{id:"by-using-useloadgraph",children:["By using ",(0,n.jsx)(t.strong,{children:"useLoadGraph"})]}),"\n",(0,n.jsxs)(t.p,{children:["In a children component of ",(0,n.jsx)(t.code,{children:"SigmaContainer"}),", you can use the hook ",(0,n.jsx)(t.code,{children:"useLoadGraph"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This hook is just returns a function that takes a graphology instance, and load it in Sigma."}),"\n",(0,n.jsx)(i.O,{title:"Loading a graph with useLoadGraph hook",code:o,component:()=>{const{LoadGraphWithHook:e}=a(2141);return(0,n.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,n.jsxs)(t.p,{children:["Per default, when the ",(0,n.jsx)(t.code,{children:"SigmaContainer"})," is mounted, the library create a default graphology graph (see ",(0,n.jsx)(t.a,{href:"https://graphology.github.io/instantiation.html",children:"https://graphology.github.io/instantiation.html"}),").\nBut you can define the type of graph that react-sigma will create by passing the constructor you want to use."]}),"\n",(0,n.jsx)(t.p,{children:"This step is mandatory if you want to use a multi graph (ie. parallel edges)."}),"\n",(0,n.jsx)(i.O,{code:s,title:"Defining the graph constructor",component:()=>{const{MultiDirectedGraph:e}=a(2999);return(0,n.jsx)(e,{style:{height:"400px"}})}})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2141:(e,t,a)=>{"use strict";a.r(t),a.d(t,{LoadGraphWithHook:()=>s});var n=a(4041),r=a(2437),i=a(5556),o=a(1085);const l=()=>{const e=(0,i.Su)();return(0,n.useEffect)((()=>{const t=new r.MultiDirectedGraph;t.addNode("A",{x:0,y:0,label:"Node A",size:10}),t.addNode("B",{x:1,y:1,label:"Node B",size:10}),t.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),e(t)}),[e]),null},s=e=>{let{style:t}=e;return(0,o.jsx)(i.hF,{style:t,children:(0,o.jsx)(l,{})})}},7415:(e,t,a)=>{"use strict";a.r(t),a.d(t,{LoadGraphWithProp:()=>o});var n=a(2437),r=a(5556),i=a(1085);const o=e=>{let{style:t}=e;const a=new n.MultiDirectedGraph;return a.addNode("A",{x:0,y:0,label:"Node A",size:10}),a.addNode("B",{x:1,y:1,label:"Node B",size:10}),a.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),(0,i.jsx)(r.hF,{style:t,graph:a,settings:{allowInvalidContainer:!0}})}},2999:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MultiDirectedGraph:()=>m});var n=a(4041),r=a(2437),i=a(548),o=a(2072),l=a(5556),s=a(1724),d=a(1085);const c=()=>{const{faker:e,randomColor:t}=(0,s.l)(),a=(0,l.Su)();return(0,n.useEffect)((()=>{const n=new r.MultiDirectedGraph;n.addNode("a",{x:0,y:0,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addNode("b",{x:1,y:-1,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addNode("c",{x:3,y:-2,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addNode("d",{x:1,y:-3,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addNode("e",{x:3,y:-4,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addNode("f",{x:4,y:-5,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),n.addEdge("a","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("b","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("b","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("c","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("c","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("d","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("e","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("e","f",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),n.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),(0,i.IU)(n,{edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"}),n.forEachEdge(((e,t)=>{let{parallelIndex:a,parallelMaxIndex:r}=t;"number"==typeof a?n.mergeEdgeAttributes(e,{type:"curved",curvature:i.yk+3*i.yk*a/(r||1)}):n.setEdgeAttribute(e,"type","straight")})),a(n)}),[a,e,t]),null},m=e=>{let{style:t}=e;const a=(0,n.useMemo)((()=>({allowInvalidContainer:!0,renderEdgeLabels:!0,defaultEdgeType:"straight",edgeProgramClasses:{straight:o.nc,curved:i.Ay}})),[]);return(0,d.jsx)(l.hF,{style:t,graph:r.MultiDirectedGraph,settings:a,children:(0,d.jsx)(c,{})})}},1724:(e,t,a)=>{"use strict";a.d(t,{l:()=>c});var n=a(4041),r=a(2464),i=a.n(r),o=a(8188),l=a(2437),s=a(273),d=a.n(s);const c=()=>{const[e,t]=(0,n.useState)(o.Jb);(0,n.useEffect)((()=>{const e=new URLSearchParams(document.location.search).get("seed");if(e){i()(e,{global:!0});const a=new o.Gz({locale:o.en});a.seed(Math.random()),t(a)}}),[document.location]);const a=(0,n.useCallback)((()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[e]),r=(0,n.useCallback)((()=>{const t=d()(l.UndirectedGraph,{order:100,probability:.1});return t.nodes().forEach((n=>{t.mergeNodeAttributes(n,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:a(),x:Math.random(),y:Math.random(),borderColor:a(),borderSize:e.number.float({min:0,max:1,multipleOf:.1}),pictoColor:a(),image:e.image.urlLoremFlickr()})})),t}),[e]);return{faker:e,randomColor:a,randomGraph:r}}},5694:(e,t,a)=>{"use strict";a.d(t,{A:()=>s,O:()=>l});var n=a(4041),r=a(4506),i=a(6704),o=a(1085);const l=e=>{let{code:t,title:a,component:l,mode:s="code"}=e;const[d,c]=(0,n.useState)(s);return(0,o.jsx)(i.A,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:()=>(0,o.jsxs)("div",{className:"code-preview",children:[(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("div",{children:a&&(0,o.jsx)("h5",{children:a})}),(0,o.jsxs)("div",{className:"switch",children:[(0,o.jsx)("button",{className:"button",onClick:()=>c("code"),disabled:"code"===d,children:"Code"}),(0,o.jsx)("button",{className:"button",onClick:()=>c("preview"),disabled:"preview"===d,children:"Preview"})]})]}),(0,o.jsxs)("div",{className:"content",children:["preview"===d&&l(),"code"===d&&(0,o.jsx)(r.A,{language:"jsx",children:t})]})]})})},s=l},7713:()=>{},5556:(e,t,a)=>{"use strict";a.d(t,{Bx:()=>d,Qp:()=>f,Su:()=>b,_d:()=>E,dW:()=>c,hF:()=>v,n4:()=>x,pj:()=>I,qz:()=>D,t_:()=>R});var n=a(4041),r=a(2437),i=a(4160);const o=(0,n.createContext)(null),l=o.Provider;function s(){const e=(0,n.useContext)(o);if(null==e)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return e}function d(){return s().sigma}function c(){const{sigma:e}=s();return(0,n.useCallback)((t=>{e&&Object.keys(t).forEach((a=>{e.setSetting(a,t[a])}))}),[e])}function m(e){return new Set(Object.keys(e))}const u=m({clickNode:!0,rightClickNode:!0,downNode:!0,enterNode:!0,leaveNode:!0,doubleClickNode:!0,wheelNode:!0,clickEdge:!0,rightClickEdge:!0,downEdge:!0,enterEdge:!0,leaveEdge:!0,doubleClickEdge:!0,wheelEdge:!0,clickStage:!0,rightClickStage:!0,downStage:!0,doubleClickStage:!0,wheelStage:!0,beforeRender:!0,afterRender:!0,kill:!0,upStage:!0,upEdge:!0,upNode:!0,enterStage:!0,leaveStage:!0,resize:!0,afterClear:!0,afterProcess:!0,beforeClear:!0,beforeProcess:!0}),g=m({click:!0,rightClick:!0,doubleClick:!0,mouseup:!0,mousedown:!0,mousemove:!0,mousemovebody:!0,mouseleave:!0,mouseenter:!0,wheel:!0}),h=m({touchup:!0,touchdown:!0,touchmove:!0}),p=m({updated:!0});function f(){const e=d(),t=c(),[a,r]=(0,n.useState)({});return(0,n.useEffect)((()=>{if(!e||!a)return;const t=a,n=Object.keys(t);return n.forEach((a=>{const n=t[a];u.has(a)&&e.on(a,n),g.has(a)&&e.getMouseCaptor().on(a,n),h.has(a)&&e.getTouchCaptor().on(a,n),p.has(a)&&e.getCamera().on(a,n)})),()=>{e&&n.forEach((a=>{const n=t[a];u.has(a)&&e.off(a,n),g.has(a)&&e.getMouseCaptor().off(a,n),h.has(a)&&e.getTouchCaptor().off(a,n),p.has(a)&&e.getCamera().off(a,n)}))}}),[e,a,t]),r}function b(){const e=d();return(0,n.useCallback)((function(t,a){void 0===a&&(a=!0),e&&t&&(a&&e.getGraph().order>0&&e.getGraph().clear(),e.getGraph().import(t),e.refresh())}),[e])}function x(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!=Object.keys(t).length)return!1;for(const a in e){if(!Object.hasOwn(t,a))return!1;if(!x(e[a],t[a]))return!1}return!0}return!1}function y(e){const t=d(),[a,r]=(0,n.useState)(e||{});(0,n.useEffect)((()=>{x(a,e||{})||r(e||{})}),[e]);const i=(0,n.useCallback)((e=>{t.getCamera().animatedZoom(Object.assign(Object.assign({},a),e))}),[t,a]),o=(0,n.useCallback)((e=>{t.getCamera().animatedUnzoom(Object.assign(Object.assign({},a),e))}),[t,a]),l=(0,n.useCallback)((e=>{t.getCamera().animatedReset(Object.assign(Object.assign({},a),e))}),[t,a]),s=(0,n.useCallback)(((e,n)=>{t.getCamera().animate(e,Object.assign(Object.assign({},a),n))}),[t,a]),c=(0,n.useCallback)(((e,n)=>{const r=t.getNodeDisplayData(e);r?t.getCamera().animate(r,Object.assign(Object.assign({},a),n)):console.log(`Node ${e} not found`)}),[t,a]);return{zoomIn:i,zoomOut:o,reset:l,goto:s,gotoNode:c}}const v=(0,n.forwardRef)(((e,t)=>{let{graph:a,id:o,className:s,style:d,settings:c={},children:m}=e;const u=(0,n.useRef)(null),g=(0,n.useRef)(null),h={className:`react-sigma ${s||""}`,id:o,style:d},[p,f]=(0,n.useState)(null),[b,y]=(0,n.useState)(c);(0,n.useEffect)((()=>{x(b,c)||y(c)}),[c]),(0,n.useEffect)((()=>{let e=null;if(null!==g.current){let t=new r;a&&(t="function"==typeof a?new a:a),e=new i.UT(t,g.current,b),p&&e.getCamera().setState(p.getCamera().getState())}return f(e),()=>{e&&e.kill(),f(null)}}),[g,a,b]),(0,n.useImperativeHandle)(t,(()=>p),[p]);const v=(0,n.useMemo)((()=>p&&u.current?{sigma:p,container:u.current}:null),[p,u.current]),E=null!==v?n.createElement(l,{value:v},m):null;return n.createElement("div",Object.assign({},h,{ref:u}),n.createElement("div",{className:"sigma-container",ref:g}),E)})),E=e=>{let{id:t,className:a,style:r,children:i,position:o="bottom-left"}=e;const l={className:`react-sigma-controls ${a||""} ${o}`,id:t,style:r};return n.createElement("div",Object.assign({},l),i)};var S;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},C.apply(this,arguments)}var k,w=function(e){return n.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),S||(S=n.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}var N,O=function(e){return n.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),k||(k=n.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_.apply(this,arguments)}var z=function(e){return n.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),N||(N=n.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};const I=e=>{let{className:t,style:a,animationDuration:r=200,children:i,labels:o={}}=e;const{zoomIn:l,zoomOut:s,reset:d}=y({duration:r,factor:1.5}),c={style:a,className:`react-sigma-control ${t||""}`};return n.createElement(n.Fragment,null,n.createElement("div",Object.assign({},c),n.createElement("button",{onClick:()=>l(),title:o.zoomIn||"Zoom In"},i?i[0]:n.createElement(w,{style:{width:"1em"}}))),n.createElement("div",Object.assign({},c),n.createElement("button",{onClick:()=>s(),title:o.zoomOut||"Zoom Out"},i?i[1]:n.createElement(O,{style:{width:"1em"}}))),n.createElement("div",Object.assign({},c),n.createElement("button",{onClick:()=>d(),title:o.reset||"See whole graph"},i?i[2]:n.createElement(z,{style:{width:"1em"}}))))};var G;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},M.apply(this,arguments)}var A,L=function(e){return n.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),G||(G=n.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}var F=function(e){return n.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),A||(A=n.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};const R=e=>{let{id:t,className:a,style:r,container:i,children:o,labels:l={}}=e;const{isFullScreen:d,toggle:c}=function(e){const t=s(),[a,r]=(0,n.useState)(!1),[i,o]=(0,n.useState)(e||t.container),l=()=>r((e=>!e));return(0,n.useEffect)((()=>(document.addEventListener("fullscreenchange",l),()=>document.removeEventListener("fullscreenchange",l))),[l]),(0,n.useEffect)((()=>{o(e||t.container)}),[e,t.container]),{toggle:(0,n.useCallback)((()=>{var e;e=i,document.fullscreenElement!==e?e.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}),[i]),isFullScreen:a}}(null==i?void 0:i.current),m={className:`react-sigma-control ${a||""}`,id:t,style:r};return document.fullscreenEnabled?n.createElement("div",Object.assign({},m),n.createElement("button",{onClick:c,title:d?l.exit||"Exit fullscreen":l.enter||"Enter fullscreen"},o&&!d&&o[0],o&&d&&o[1],!o&&!d&&n.createElement(L,{style:{width:"1em"}}),!o&&d&&n.createElement(F,{style:{width:"1em"}}))):null},D=e=>{let{id:t,className:a,style:r,labels:i={}}=e;const o=d(),l=f(),{gotoNode:s}=y(),[c,m]=(0,n.useState)(""),[u,g]=(0,n.useState)([]),[h,p]=(0,n.useState)(null),[b,x]=(0,n.useState)("");(0,n.useEffect)((()=>{x(`search-${Math.random().toString(36).slice(2)}`)}),[]),(0,n.useEffect)((()=>{const e=[];!h&&c.length>1&&o.getGraph().forEachNode(((t,a)=>{a.label&&a.label.toLowerCase().includes(c.toLowerCase())&&e.push({id:t,label:a.label})})),g(e)}),[c]),(0,n.useEffect)((()=>{l({clickStage:()=>{p(null),m("")}})}),[l]),(0,n.useEffect)((()=>{if(h)return o.getGraph().setNodeAttribute(h,"highlighted",!0),s(h),()=>{o.getGraph().setNodeAttribute(h,"highlighted",!1)}}),[h]);const v={className:`react-sigma-search ${a||""}`,id:t,style:r};return n.createElement("div",Object.assign({},v),n.createElement("label",{htmlFor:b,style:{display:"none"}},i.text||"Search a node"),n.createElement("input",{id:b,type:"text",placeholder:i.placeholder||"Search...",list:`${b}-datalist`,value:c,onChange:e=>{const t=e.target.value,a=u.find((e=>e.label===t));a?(m(a.label),g([]),p(a.id)):(p(null),m(t))}}),n.createElement("datalist",{id:`${b}-datalist`},u.map((e=>n.createElement("option",{key:e.id,value:e.label},e.label)))))}}}]);