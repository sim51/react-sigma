import{j as r}from"./jsx-runtime-CLpGMVip.js";import{p as o,a as m,b as d,D as l,S as s,M as i,C as p}from"./style-CJTJwj8w.js";import{r as f}from"./index-nBX9XC1j.js";import{p as u,e as g}from"./sigma-rendering.esm-D473eMMs.js";import{u as b}from"./useRandom-sd8fEZq-.js";const y=()=>{const{faker:e,randomColor:n}=b(),t=p();return f.useEffect(()=>{const a=new i;a.addNode("a",{x:0,y:0,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addNode("b",{x:1,y:-1,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addNode("c",{x:3,y:-2,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addNode("d",{x:1,y:-3,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addNode("e",{x:3,y:-4,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addNode("f",{x:4,y:-5,size:e.number.float({min:.1,max:.3,multipleOf:.05}),color:n(),label:e.person.fullName()}),a.addEdge("a","b",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("b","c",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("b","d",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("c","b",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("c","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("d","c",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("e","d",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("e","f",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),a.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.float({min:.01,max:.1,multipleOf:.01})}),t(a)},[t,e,n]),null},c={primitives:{edges:{paths:[o(),u(),m()],extremities:[g()],layers:[d()]}},styles:{nodes:[l.nodes,{color:{attribute:"color"},size:{attribute:"size"}}],edges:[l.edges,{color:{attribute:"color"},size:{attribute:"size"},path:"straight",selfLoopPath:"loop",parallelPath:"curved",head:{attribute:"head",defaultValue:"arrow"}}]},settings:{autoRescale:!0}},S=({style:e})=>r.jsx(s,{style:e,graph:i,options:c,children:r.jsx(y,{})});S.__docgenInfo={description:"",methods:[],displayName:"MultiDirectedGraph",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const k=`import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph as MultiGraphConstructor } from 'graphology';
import { CSSProperties, FC, useEffect } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { extremityArrow, layerPlain, pathCurved, pathLine, pathLoop } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import { useRandom } from './common/useRandom';

type NodeType = {
  x: number;
  y: number;
  label: string;
  size: number;
  color: string;
};
type EdgeType = {
  type?: string;
  label?: string;
  size?: number;
  curvature?: number;
  parallelIndex?: number;
  parallelMaxIndex?: number;
};

const MyGraph: React.FC = () => {
  const { faker, randomColor } = useRandom();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();

  useEffect(() => {
    // Create the graph
    const graph = new MultiGraphConstructor<NodeType, EdgeType>();

    graph.addNode('a', {
      x: 0,
      y: 0,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('b', {
      x: 1,
      y: -1,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('c', {
      x: 3,
      y: -2,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('d', {
      x: 1,
      y: -3,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('e', {
      x: 3,
      y: -4,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode('f', {
      x: 4,
      y: -5,
      size: faker.number.float({ min: 0.1, max: 0.3, multipleOf: 0.05 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });

    graph.addEdge('a', 'b', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('b', 'c', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('b', 'd', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('c', 'b', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('c', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'c', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('d', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('e', 'd', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('e', 'f', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('f', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });
    graph.addEdge('f', 'e', {
      label: faker.date.anytime().toISOString(),
      size: faker.number.float({ min: 0.01, max: 0.1, multipleOf: 0.01 }),
    });

    // load the graph in sigma
    loadGraph(graph);
  }, [loadGraph, faker, randomColor]);

  return null;
};

const sigmaOptions: SigmaOptions<NodeType, EdgeType> = {
  primitives: {
    edges: {
      paths: [pathLine(), pathCurved(), pathLoop()],
      extremities: [extremityArrow()],
      layers: [layerPlain()],
    },
  },
  styles: {
    nodes: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.nodes as any,
      {
        color: { attribute: 'color' },
        size: { attribute: 'size' },
      },
    ],
    edges: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.edges as any,
      {
        color: { attribute: 'color' },
        size: { attribute: 'size' },
        path: 'straight',
        selfLoopPath: 'loop',
        parallelPath: 'curved',
        head: { attribute: 'head', defaultValue: 'arrow' },
      },
    ],
  },
  settings: {
    autoRescale: true,
  },
};
export const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} options={sigmaOptions}>
    <MyGraph />
  </SigmaContainer>
);
`;export{S as M,k as s};
