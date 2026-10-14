import{j as p}from"./jsx-runtime-CLpGMVip.js";import{S as f,C as y,G as h}from"./style-CJTJwj8w.js";import{t as g}from"./react-sigma_layout-circular.esm.min-J5L-4AKg.js";import{r as C}from"./index-nBX9XC1j.js";import{u as b}from"./useRandom-sd8fEZq-.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";const S=()=>{const{faker:o,randomColor:t}=b(),{positions:s,assign:i}=g(),l=y();return C.useEffect(()=>{const e=new h;for(let r=0;r<100;r++)e.addNode(r,{label:o.person.fullName(),size:o.number.int({min:1,max:20}),color:t(),x:0,y:0});for(let r=0;r<100;r++)for(let n=r+1;n<100;n++)Math.random()<.1&&e.addDirectedEdge(r,n),Math.random()<.1&&e.addDirectedEdge(n,r);l(e),i(),console.log(s())},[i,l,o.datatype,o,t,s]),null},u=({style:o})=>p.jsx(f,{style:o,options:{settings:{itemSizesReference:"screen"}},children:p.jsx(S,{})});u.__docgenInfo={description:"",methods:[],displayName:"LayoutCircular",props:{style:{required:!0,tsType:{name:"CSSProperties"},description:""}}};const x=`import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
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
        size: faker.number.int({ min: 1, max: 20 }),
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
    // eslint-disable-next-line no-console
    console.log(positions());
  }, [assign, loadGraph, faker.datatype, faker, randomColor, positions]);

  return null;
};

export const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={{ settings: { itemSizesReference: 'screen' } }}>
      <RandomCircleGraph />
    </SigmaContainer>
  );
};
`,z={component:u,id:"layout-circular",title:"Layouts"},a={name:"Apply a circular layout",args:{},parameters:{storySource:{source:x}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Apply a circular layout',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,z as default};
