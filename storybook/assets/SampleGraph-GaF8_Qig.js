import{r as i}from"./index-Dl6G-zuu.js";import{v as p,y as m,p as f,_ as G}from"./react-sigma.min-Bv1msYwt.js";import{a as E}from"./react-sigma_layout-circular.esm.min-CxXfIbzy.js";import{u as N}from"./useRandom-Bw2Vt9je.js";const w=({disableHoverEffect:o})=>{const{randomGraph:h}=N(),n=p(),c=m(),g=f(),l=G(),{assign:d}=E(),[r,u]=i.useState(null);return i.useEffect(()=>{const e=h();console.log("Graph is ",e.toJSON()),l(e),d(),c({enterNode:s=>u(s.node),leaveNode:()=>u(null)})},[d,l,c,h]),i.useEffect(()=>{g({nodeReducer:(e,s)=>{const a=n.getGraph(),t={...s,highlighted:s.highlighted||!1};return!o&&r&&(e===r||a.neighbors(r).includes(e)?t.highlighted=!0:(t.color="#E2E2E2",t.highlighted=!1)),t},edgeReducer:(e,s)=>{const a=n.getGraph(),t={...s,hidden:!1};return!o&&r&&!a.extremities(e).includes(r)&&(t.hidden=!0),t}})},[r,g,n,o]),null};export{w as S};
