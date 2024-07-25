"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[788],{323:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(1085),r=n(1184);const i={},c="Function: useRegisterEvents()",o={id:"api/core/functions/useRegisterEvents",title:"Function: useRegisterEvents()",description:"useRegisterEvents\\(): (eventHandlers) => void",source:"@site/docs/api/core/functions/useRegisterEvents.md",sourceDirName:"api/core/functions",slug:"/api/core/functions/useRegisterEvents",permalink:"/react-sigma/docs/api/core/functions/useRegisterEvents",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/api/core/functions/useRegisterEvents.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Function: useLoadGraph()",permalink:"/react-sigma/docs/api/core/functions/useLoadGraph"},next:{title:"Function: useSetSettings()",permalink:"/react-sigma/docs/api/core/functions/useSetSettings"}},d={},a=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"function-useregisterevents",children:"Function: useRegisterEvents()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"useRegisterEvents"}),"<",(0,t.jsx)(s.code,{children:"N"}),", ",(0,t.jsx)(s.code,{children:"E"}),", ",(0,t.jsx)(s.code,{children:"G"}),">(): (",(0,t.jsx)(s.code,{children:"eventHandlers"}),") => ",(0,t.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"React hook that helps you to listen Sigma\u2019s events.\nIt handles for you all the lifecyle of listener (ie. on / remove)"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"const registerEvents = useRegisterEvents();\nconst [setHoveredNode,setHoveredNode] = useState<string|null>(null);\n...\nuseEffect(() => {\n registerEvents({\n   enterNode: event => setHoveredNode(event.node),\n   leaveNode: event => setHoveredNode(null),\n });\n}, []);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"N"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"Attributes"})," = ",(0,t.jsx)(s.code,{children:"Attributes"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"E"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"Attributes"})," = ",(0,t.jsx)(s.code,{children:"Attributes"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"G"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"Attributes"})," = ",(0,t.jsx)(s.code,{children:"Attributes"})]}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Function"})}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"eventHandlers"}),": ",(0,t.jsx)(s.code,{children:"Partial"}),"<",(0,t.jsx)(s.a,{href:"/react-sigma/docs/api/core/type-aliases/EventHandlers",children:(0,t.jsx)(s.code,{children:"EventHandlers"})}),">"]}),"\n",(0,t.jsx)(s.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/sim51/react-sigma/blob/6170fa4140156c950dc0ad29b7cf58dd5b9330aa/packages/core/src/hooks/useRegisterEvents.ts#L87",children:"packages/core/src/hooks/useRegisterEvents.ts:87"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1184:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(4041);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);