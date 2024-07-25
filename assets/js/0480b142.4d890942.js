"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[8070],{974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(1085),i=n(1184);const o={},a="Frequently Asked Questions",s={id:"faq",title:"Frequently Asked Questions",description:"How I can correct the error Error container has no height. ?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/react-sigma/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"External State",permalink:"/react-sigma/docs/example/external_state"}},c={},d=[{value:"How I can correct the error <code>Error: Sigma: container has no height.</code> ?",id:"how-i-can-correct-the-error-error-sigma-container-has-no-height-",level:2},{value:"How I can correct the error <code>Graph.addEdge: an edge linking &quot;X&quot; to &quot;Y&quot; already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the &#39;multi&#39; option.</code>",id:"how-i-can-correct-the-error-graphaddedge-an-edge-linking-x-to-y-already-exists-if-you-really-want-to-add-multiple-edges-linking-those-nodes-you-should-create-a-multi-graph-by-using-the-multi-option",level:2},{value:"How I can create a graph with parallel edges ?",id:"how-i-can-create-a-graph-with-parallel-edges-",level:2},{value:"Is it possible to use this project with Next.js ?",id:"is-it-possible-to-use-this-project-with-nextjs-",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,r.jsxs)(t.h2,{id:"how-i-can-correct-the-error-error-sigma-container-has-no-height-",children:["How I can correct the error ",(0,r.jsx)(t.code,{children:"Error: Sigma: container has no height."})," ?"]}),"\n",(0,r.jsxs)(t.p,{children:["This error comes from Sigma it self.\nTo work, Sigma requires that its ",(0,r.jsx)(t.em,{children:"div container"})," has a height.\nPer default in the CSS of this project, ",(0,r.jsx)(t.em,{children:"SigmaContainer"})," is configured to take 100% (height & width) of its parent."]}),"\n",(0,r.jsxs)(t.p,{children:["To resolve this issue, the easiest way is to add an ",(0,r.jsx)(t.em,{children:"height"})," on the ",(0,r.jsx)(t.em,{children:"SigmaContainer"})," like that :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<SigmaContainer style={{ height: "500px", width: "500px" }}>...</SigmaContainer>\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"how-i-can-correct-the-error-graphaddedge-an-edge-linking-x-to-y-already-exists-if-you-really-want-to-add-multiple-edges-linking-those-nodes-you-should-create-a-multi-graph-by-using-the-multi-option",children:["How I can correct the error ",(0,r.jsx)(t.code,{children:'Graph.addEdge: an edge linking "X" to "Y" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the \'multi\' option.'})]}),"\n",(0,r.jsx)(t.p,{children:"This error comes from graphology and says to you that you are trying to create a multi-edges\n(ie parallel edges) graph, on a graph instance that doesn't support it."}),"\n",(0,r.jsxs)(t.p,{children:["Per default ",(0,r.jsx)(t.code,{children:"react-sigma"})," create a graph that doesn't allow multi-edges,\nbut you can specify on the ",(0,r.jsx)(t.code,{children:"SigmaContainer"})," the graphology constructor your need."]}),"\n",(0,r.jsx)(t.p,{children:"Example :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import { FC } from "react";\nimport { MultiDirectedGraph } from "graphology";\nimport { SigmaContainer } from "@react-sigma/core";\n\nexport const MultiDirectedGraphView: FC = () => {\n  return (\n    <SigmaContainer graph={MultiDirectedGraph}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"Note that Sigma.js in its version 2, doesn't support curved edges."}),"\n",(0,r.jsx)(t.h2,{id:"how-i-can-create-a-graph-with-parallel-edges-",children:"How I can create a graph with parallel edges ?"}),"\n",(0,r.jsx)(t.p,{children:"See the question above."}),"\n",(0,r.jsx)(t.h2,{id:"is-it-possible-to-use-this-project-with-nextjs-",children:"Is it possible to use this project with Next.js ?"}),"\n",(0,r.jsx)(t.p,{children:"This project can be used with Next.js, but only for client rendering, not for server side."}),"\n",(0,r.jsxs)(t.p,{children:["If you encounter the error ",(0,r.jsx)(t.code,{children:"ReferenceError: window is not defined"}),", it's because you try to use react-sigma for server and client side and obviously ",(0,r.jsx)(t.code,{children:"window"})," is not define on service side."]}),"\n",(0,r.jsx)(t.p,{children:"To fix it, you have to check that you are on client side, and then do a dynamic import :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'const isBrowser = () => typeof window !== "undefined";\nif (isBrowser) {\n  const SigmaContainer = dynamic(\n    import("@react-sigma/core").then((mod) => mod.SigmaContainer),\n    { ssr: false },\n  );\n  const MyGraph = dynamic(\n    import("../components/graph").then((mod) => mod.NetworkGraph),\n    { ssr: false },\n  );\n  return (\n    <SigmaContainer>\n      <MyGraph />\n    </SigmaContainer>\n  );\n} else return <p>NOT AVAILABLE</p>;\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(4041);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);