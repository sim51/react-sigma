"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"index",title:"@react-sigma/layout-force",sidebar_label:"layout-force",sidebar_position:.5,custom_edit_url:null},l=void 0,i={unversionedId:"api/layout-force/index",id:"api/layout-force/index",title:"@react-sigma/layout-force",description:"Type Aliases",source:"@site/docs/api/layout-force/index.md",sourceDirName:"api/layout-force",slug:"/api/layout-force/",permalink:"/react-sigma/docs/api/layout-force/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"index",title:"@react-sigma/layout-force",sidebar_label:"layout-force",sidebar_position:.5,custom_edit_url:null},sidebar:"docs",previous:{title:"layout-forceatlas2",permalink:"/react-sigma/docs/api/layout-forceatlas2/"},next:{title:"layout-noverlap",permalink:"/react-sigma/docs/api/layout-noverlap/"}},p={},d=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"LayoutForceControlProps",id:"layoutforcecontrolprops",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Component Functions",id:"component-functions",level:2},{value:"LayoutForceControl",id:"layoutforcecontrol",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Hook Functions",id:"hook-functions",level:2},{value:"useLayoutForce",id:"uselayoutforce",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useWorkerLayoutForce",id:"useworkerlayoutforce",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],u={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"layoutforcecontrolprops"},"LayoutForceControlProps"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"LayoutForceControlProps"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"WorkerLayoutControlProps"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ForceLayoutSupervisorParameters"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},'"layout"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"settings"'),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"settings?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ForceLayoutSupervisorParameters"),"  }"),(0,r.kt)("p",null,"Properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"ForceDirectedControl")," component"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sim51/react-sigma/blob/888c9c8/project/packages/layout-force/src/LayoutForceControl.tsx#L10"},"packages/layout-force/src/LayoutForceControl.tsx:10")),(0,r.kt)("h2",{id:"component-functions"},"Component Functions"),(0,r.kt)("h3",{id:"layoutforcecontrol"},"LayoutForceControl"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"LayoutForceControl"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"context?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Component that display a button to start/stop the layout."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#layoutforcecontrolprops"},(0,r.kt)("inlineCode",{parentName:"a"},"LayoutForceControlProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/@types/react/index.d.ts:520"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hook-functions"},"Hook Functions"),(0,r.kt)("h3",{id:"uselayoutforce"},"useLayoutForce"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useLayoutForce"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"settings?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"React hook that helps you to manage ",(0,r.kt)("a",{parentName:"p",href:"https://graphology.github.io/standard-library/layout-force.html"},"force layout"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { positions, assign } = useLayoutForce(...);\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settings?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ForceLayoutParameters"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Attributes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Attributes"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assign")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"positions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => { ",(0,r.kt)("inlineCode",{parentName:"td"},"[node: string]"),": { ",(0,r.kt)("inlineCode",{parentName:"td"},"[dimension: string]"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"number"),";  };  }")))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"packages/layout-core/lib/useLayoutFactory.d.ts:10"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useworkerlayoutforce"},"useWorkerLayoutForce"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"useWorkerLayoutForce"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"settings"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"React hook that helps you to manage worker of ",(0,r.kt)("a",{parentName:"p",href:"https://graphology.github.io/standard-library/layout-force.html"},"force layout"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { stop, start } = useWorkerLayoutForce(...);\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settings")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ForceLayoutSupervisorParameters"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Attributes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Attributes"),">")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isRunning")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kill")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"start")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"packages/layout-core/lib/useWorkerLayoutFactory.d.ts:2"))}s.isMDXComponent=!0}}]);