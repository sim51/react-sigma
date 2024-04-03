import{j as l,x as g,C as f,G as y}from"./react-sigma.min-Bupy2-id.js";import{r as h}from"./index-Dl6G-zuu.js";import{a as C}from"./react-sigma_layout-circular.esm.min-BhYom5y4.js";import{u as b}from"./useRandom-fRaoFeZj.js";import"./react-sigma_layout-core.esm.min-DJiRb8MY.js";const S=()=>{const{faker:o,randomColor:i}=b(),{positions:u,assign:s}=C(),n=f();return h.useEffect(()=>{const a=new y;for(let r=0;r<100;r++)a.addNode(r,{label:o.name.fullName(),size:o.datatype.number({min:4,max:20,precision:1}),color:i(),x:0,y:0});for(let r=0;r<100;r++)for(let e=r+1;e<100;e++)Math.random()<.1&&a.addDirectedEdge(r,e),Math.random()<.1&&a.addDirectedEdge(e,r);n(a),s(),console.log(u())},[s,n,o.datatype,o.name,i]),null},x={allowInvalidContainer:!0},d=({style:o})=>l.jsx(g,{style:o,settings:x,children:l.jsx(S,{})});d.__docgenInfo={description:"",methods:[],displayName:"LayoutCircular",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const G=`import { FC, useEffect, CSSProperties } from "react";
import Graph from "graphology";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

const RandomCircleGraph: FC = () => {
  const { faker, randomColor } = useRandom();
  // Hook for the layout
  const { positions, assign } = useLayoutCircular();
  // Hook to load the graph
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create a random graph
    const order = 100;
    const probability = 0.1;
    const graph = new Graph();
    for (let i = 0; i < order; i++) {
      graph.addNode(i, {
        label: faker.name.fullName(),
        size: faker.datatype.number({ min: 4, max: 20, precision: 1 }),
        color: randomColor(),
        x: 0,
        y: 0,
      });
    }
    for (let i = 0; i < order; i++) {
      for (let j = i + 1; j < order; j++) {
        if (Math.random() < probability) graph.addDirectedEdge(i, j);
        if (Math.random() < probability) graph.addDirectedEdge(j, i);
      }
    }

    // Load the graph in sigma
    loadGraph(graph);
    // Apply the layout
    assign();
    // Display in the console the node's position for the layout
    console.log(positions());
  }, [assign, loadGraph, faker.datatype, faker.name, randomColor]);

  return null;
};

const sigmaSettings = {
  allowInvalidContainer: true,
};

export const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};
`,w={component:d,id:"layout-circular",title:"Layouts"},t={name:"Apply a circular layout",args:{},parameters:{storySource:{source:G}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Apply a circular layout",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,w as default};
