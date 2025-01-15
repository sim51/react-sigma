import{j as p}from"./jsx-runtime-CLpGMVip.js";import{S as f,C as y,G as h}from"./style-CWrtVBmu.js";import{t as g}from"./react-sigma_layout-circular.esm.min-C7ZDmpjv.js";import{r as C}from"./index-nBX9XC1j.js";import{u as b}from"./useRandom-glAHd7HG.js";import"./react-sigma_layout-core.esm.min-B8U1ie9s.js";const G=()=>{const{faker:o,randomColor:t}=b(),{positions:i,assign:s}=g(),l=y();return C.useEffect(()=>{const a=new h;for(let r=0;r<100;r++)a.addNode(r,{label:o.person.fullName(),size:o.number.int({min:4,max:20}),color:t(),x:0,y:0});for(let r=0;r<100;r++)for(let n=r+1;n<100;n++)Math.random()<.1&&a.addDirectedEdge(r,n),Math.random()<.1&&a.addDirectedEdge(n,r);l(a),s(),console.log(i())},[s,l,o.datatype,o,t,i]),null},u=({style:o})=>p.jsx(f,{style:o,settings:{allowInvalidContainer:!0},children:p.jsx(G,{})});u.__docgenInfo={description:"",methods:[],displayName:"LayoutCircular",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const S=`import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import Graph from 'graphology';
import { CSSProperties, FC, useEffect } from 'react';

import { useRandom } from './common/useRandom';

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
  }, [assign, loadGraph, faker.datatype, faker, randomColor, positions]);

  return null;
};

export const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};
`,w={component:u,id:"layout-circular",title:"Layouts"},e={name:"Apply a circular layout",args:{},parameters:{storySource:{source:S}}};var d,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Apply a circular layout',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,w as default};
