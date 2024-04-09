import{j as l,k as f,_ as y,G as g}from"./react-sigma.min-uXSbVoH1.js";import{r as h}from"./index-Dl6G-zuu.js";import{a as C}from"./react-sigma_layout-circular.esm.min-CYape0LM.js";import{u as b}from"./useRandom-CxcujAnY.js";import"./react-sigma_layout-core.esm.min-Dtit1MEo.js";const G=()=>{const{faker:o,randomColor:i}=b(),{positions:u,assign:s}=C(),n=y();return h.useEffect(()=>{const a=new g;for(let r=0;r<100;r++)a.addNode(r,{label:o.person.fullName(),size:o.number.int({min:4,max:20}),color:i(),x:0,y:0});for(let r=0;r<100;r++)for(let e=r+1;e<100;e++)Math.random()<.1&&a.addDirectedEdge(r,e),Math.random()<.1&&a.addDirectedEdge(e,r);n(a),s(),console.log(u())},[s,n,o.datatype,o,i]),null},m=({style:o})=>l.jsx(f,{style:o,settings:{allowInvalidContainer:!0},children:l.jsx(G,{})});m.__docgenInfo={description:"",methods:[],displayName:"LayoutCircular",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const x=`import { FC, useEffect, CSSProperties } from "react";
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
        label: faker.person.fullName(),
        size: faker.number.int({ min: 4, max: 20 }),
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
  }, [assign, loadGraph, faker.datatype, faker, randomColor]);

  return null;
};

export const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};
`,N={component:m,id:"layout-circular",title:"Layouts"},t={name:"Apply a circular layout",args:{},parameters:{storySource:{source:x}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Apply a circular layout",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,N as default};
