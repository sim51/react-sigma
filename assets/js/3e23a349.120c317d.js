"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8158:(e,t,n)=>{n.d(t,{G:()=>o,Z:()=>i});var r=n(7294),a=n(814);const o=e=>{let{code:t,title:n,children:o,mode:i="code"}=e;const[l,c]=(0,r.useState)(i);return r.createElement("div",{className:"code-preview"},r.createElement("div",{className:"header"},r.createElement("div",null,n&&r.createElement("h5",null,n)),r.createElement("div",{className:"switch"},r.createElement("button",{className:"button",onClick:()=>c("code"),disabled:"code"===l},"Code"),r.createElement("button",{className:"button",onClick:()=>c("preview"),disabled:"preview"===l},"Preview"))),r.createElement("div",{className:"content"},"preview"===l&&o,"code"===l&&r.createElement(a.Z,{language:"jsx"},t)))},i=o},4319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(7462),a=n(7294),o=n(3905),i=n(8158),l=n(8925);const c=()=>{const[e,t]=(0,a.useState)(null);return(0,a.useEffect)((()=>{if(e){const t=e.getGraph();t.addNode("A",{x:0,y:0,label:"Node A",size:10}),t.addNode("B",{x:1,y:1,label:"Node B",size:10}),t.addEdgeWithKey("rel1","A","B",{label:"REL_1"})}}),[e]),a.createElement(l.C6,{ref:t,style:{height:"500px"}})},s={},m="External State",p={unversionedId:"example/external_state",id:"example/external_state",title:"External State",description:"If you want to control the sigma instance outside the SigmaContainer component,",source:"@site/docs/example/06_external_state.mdx",sourceDirName:"example",slug:"/example/external_state",permalink:"/react-sigma/docs/example/external_state",draft:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/06_external_state.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Controls",permalink:"/react-sigma/docs/example/controls"},next:{title:"Frequently Asked Questions",permalink:"/react-sigma/docs/faq"}},d={},u=[],f={toc:u};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"external-state"},"External State"),(0,o.kt)("p",null,"If you want to control the sigma instance outside the ",(0,o.kt)("inlineCode",{parentName:"p"},"SigmaContainer")," component,\nyou can use the forward reference feature on it."),(0,o.kt)("p",null,"The reference is the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"sigma")," used in the component,\nand so with it, you can what ever you want, but MUST know the API of sigma."),(0,o.kt)("p",null,"Here is an example that load a graph"),(0,o.kt)(i.G,{code:'import React, { FC, useState, useEffect } from "react";\nimport Sigma from "sigma";\nimport { SigmaContainer } from "@react-sigma/core";\n\nconst ExternalState: FC = () => {\n  const [sigma, setSigma] = useState<Sigma | null>(null);\n\n  useEffect(() => {\n    if (sigma) {\n      // Do what ever you want with the sigma API\n      const graph = sigma.getGraph();\n      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n    }\n  }, [sigma]);\n\n  return <SigmaContainer ref={setSigma} style={{ height: "500px" }} />;\n};\n\nexport default ExternalState;\n',title:"External state",mdxType:"CodePreview"},(0,o.kt)(c,{mdxType:"ExternalState"})))}g.isMDXComponent=!0}}]);