import{r as i}from"./index-Dl6G-zuu.js";import{p as f,y as G,b as E,C as N}from"./react-sigma.min-Bupy2-id.js";import{a as S}from"./react-sigma_layout-circular.esm.min-BhYom5y4.js";import{u as x}from"./useRandom-fRaoFeZj.js";const y=({disableHoverEffect:s})=>{const{faker:h,randomColor:u,randomGraph:m}=x(),n=f(),d=G(),l=E(),c=N(),{assign:g}=S(),[r,p]=i.useState(null);return i.useEffect(()=>{const e=m();console.log("Graph is ",e.toJSON()),c(e),g(),d({enterNode:o=>p(o.node),leaveNode:()=>p(null)})},[g,c,d,h.datatype,h.name,u]),i.useEffect(()=>{l({nodeReducer:(e,o)=>{const a=n.getGraph(),t={...o,highlighted:o.highlighted||!1};return!s&&r&&(e===r||a.neighbors(r).includes(e)?t.highlighted=!0:(t.color="#E2E2E2",t.highlighted=!1)),t},edgeReducer:(e,o)=>{const a=n.getGraph(),t={...o,hidden:!1};return!s&&r&&!a.extremities(e).includes(r)&&(t.hidden=!0),t}})},[r,l,n,s]),null};export{y as S};