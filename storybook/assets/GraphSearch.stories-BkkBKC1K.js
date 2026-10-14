import{j as a}from"./jsx-runtime-CLpGMVip.js";import{l as b,p as N,b as G,D as c,G as C,S as E,L as d,I as x,A as w,v}from"./style-CJTJwj8w.js";import{F as A,A as F}from"./FocusOnNode-HQ0JcCqS.js";import{c as z}from"./react-sigma_layout-forceatlas2.esm.min-DGuzWcN3.js";import{l as M}from"./sigma-node-image.esm-sUWDmIwq.js";import{r as i}from"./index-nBX9XC1j.js";import{e as L}from"./sigma-rendering.esm-D473eMMs.js";import{j}from"./dataset-1qnfU1y1.js";import"./index-BH0m1Kqc.js";import"./index-BAf46qtL.js";import"./react-sigma_layout-core.esm.min-D8BWcR0Q.js";import"./sigma-primitives.esm-C8czvpAh.js";const O={primitives:{nodes:{variables:{image:{type:"string",default:""}},layers:[b(),M()]},edges:{paths:[N()],extremities:[L()],layers:[G()]}},customNodeState:{searchMatch:!1,searchSelected:!1},customEdgeState:{searchMatch:!1,searchSelected:!1},styles:{nodes:[c.nodes,{color:{attribute:"color"},size:{attribute:"size"},labelFont:"Lato, sans-serif"},{when:(e,s,o)=>o.searchActive&&!s.searchMatch,then:{color:"#f6f6f6",label:""}},{whenState:"searchMatch",then:{depth:"topNodes",labelVisibility:"visible"}},{whenState:"searchSelected",then:{depth:"topNodes",labelVisibility:"visible",backdropVisibility:"visible"}}],edges:[c.edges,{color:{attribute:"color"},size:{attribute:"size"},path:"straight",selfLoopPath:"loop",parallelPath:"curved",head:{attribute:"head",defaultValue:"arrow"}}]},settings:{itemSizesReference:"screen",autoRescale:!0,labelDensity:.07,labelGridCellSize:60,labelRenderedSizeThreshold:15}},I=()=>{const e=v(),[s,o]=i.useState(null),S=i.useCallback(t=>{t===null&&e.setGraphState({searchActive:!1}),e.setNodesState(e.getGraph().nodes(),{searchSelected:!1}),t&&t.type==="node"&&e.setNodeState(t.id,{searchSelected:!0})},[e]),f=i.useCallback(t=>{t===null?(o(null),e.setNodesState(e.getGraph().nodes(),{searchMatch:!1,searchSelected:!1})):t.type==="node"&&(e.setNodeState(t.id,{searchSelected:!0}),o(t.id)),e.setGraphState({searchActive:!1}),e.getGraph().forEachNode(r=>e.setNodeState(r,{searchMatch:!1})),e.getGraph().forEachEdge(r=>e.setEdgeState(r,{searchMatch:!1}))},[e]),y=i.useCallback(t=>{const r=new Set,h=new Set;return t.forEach(n=>{n.type==="node"&&r.add(n.id),n.type==="edge"&&h.add(n.id)}),e.getGraph().forEachNode(n=>e.setNodeState(n,{searchMatch:r.has(n)})),e.getGraph().forEachEdge(n=>e.setEdgeState(n,{searchMatch:h.has(n)})),e.setGraphState({searchActive:r.size>0||h.size>0}),t.length<=10?t:[...t.slice(0,10),{type:"message",message:a.jsxs("span",{className:"text-center text-muted",children:["And ",t.length-10," others"]})}]},[e]);return a.jsxs(a.Fragment,{children:[a.jsx(A,{node:s}),a.jsx(F,{type:"nodes",value:s?{type:"node",id:s}:null,onFocus:S,onChange:f,postSearchResult:y,minisearchOptions:{fields:["prop_tag"]}})]})},u=({style:e})=>{const s=C.from(j);return a.jsxs(E,{options:O,style:e,graph:s,children:[a.jsxs(d,{position:"bottom-right",children:[a.jsx(x,{}),a.jsx(w,{}),a.jsx(z,{})]}),a.jsx(d,{position:"top-right",children:a.jsx(I,{})})]})};u.__docgenInfo={description:"",methods:[],displayName:"GraphSearchDemo",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const R=`import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl, useSigma } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { GraphSearch, GraphSearchOption } from '@react-sigma/graph-search';
import '@react-sigma/graph-search/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { layerImage } from '@sigma/node-image';
import Graph from 'graphology';
import { Attributes, SerializedGraph } from 'graphology-types';
import { CSSProperties, FC, useCallback, useState } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { extremityArrow, layerFill, layerPlain, pathLine } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import jsonGraph from '../public/react-sigma/demo/dataset.json';
import { FocusOnNode } from './common/FocusOnNode';

/**
 * GraphSearch component index your graph into a minisearch index and allows you to search on it.
 * This example show you how to use it and to customize the style of the graph while your searching and selecting an item.
 *
 * We will use the state system of sigmav4 for nodes, edges & graph, to know :
 * - if a search is in progress with the \`GraphState.searchActive\`
 * - if an item match the current query with \`NodeState.searchMatch\` or \`EdgeState.searchMatch\`
 * - if an item is selected in the search with \`NodeState.searchSelected\` or \`EdgeState.searchSelected\`
 *
 * The GraphSearch comes with function \`postSearchResult\` which is called with the result of the query.
 * which allows you to change the state of the nodes & edges for the \`searchMatch\` flag
 *
 * On the \`onChange\`, you can change the state for the \`searchSelected\` flag.
 *
 * When all the state is ready, you add some style on your graph based on it.
 *
 */

// Types
// ~~~~~
type Node = {
  key: string;
  label: string;
  tag: string;
  URL: string;
  cluster: string;
  x: number;
  y: number;
  size: number;
  image: string;
  color: string;
};
type NodeState = {
  searchMatch: boolean;
  searchSelected: boolean;
};
type Edge = {
  size: number;
};
type EdgeState = {
  searchMatch: boolean;
  searchSelected: boolean;
};
type GraphState = {
  searchActive: boolean;
};

// Sigma options
// ~~~~~~~~~~~~~
// We define the default graph style
const sigmaOptions: SigmaOptions<Node, Edge, Attributes, NodeState, EdgeState, GraphState> = {
  primitives: {
    nodes: {
      variables: {
        image: { type: 'string', default: '' },
      },
      layers: [layerFill(), layerImage()],
    },
    edges: {
      paths: [pathLine()],
      extremities: [extremityArrow()],
      layers: [layerPlain()],
    },
  },
  customNodeState: { searchMatch: false, searchSelected: false },
  customEdgeState: { searchMatch: false, searchSelected: false },
  styles: {
    nodes: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.nodes as any,
      {
        color: { attribute: 'color' },
        size: { attribute: 'size' },
        labelFont: 'Lato, sans-serif',
      },
      // Hide nodes that don't match the search query
      {
        when: (_, state, graphState) => graphState.searchActive && !state.searchMatch,
        then: { color: '#f6f6f6', label: '' },
      },
      // For nodes that match the search query, render at top and display the label
      {
        whenState: 'searchMatch',
        then: { depth: 'topNodes', labelVisibility: 'visible' },
      },
      // For the selected node by the search, render at top with the backdrop
      {
        whenState: 'searchSelected',
        then: { depth: 'topNodes', labelVisibility: 'visible', backdropVisibility: 'visible' },
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
    itemSizesReference: 'screen',
    autoRescale: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
  },
};

const SearchNodeControl: FC = () => {
  const sigma = useSigma<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState>();

  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  /**
   * Used in search while you hover a result in the droplist or on focus out of the search (then value is null)
   */
  const onFocus = useCallback(
    (value: GraphSearchOption | null) => {
      if (value === null) sigma.setGraphState({ searchActive: false });

      sigma.setNodesState(sigma.getGraph().nodes(), { searchSelected: false });
      if (value && value.type === 'node') {
        sigma.setNodeState(value.id, { searchSelected: true });
      }
    },
    [sigma],
  );

  /**
   * Used when the selected element changed.
   */
  const onChange = useCallback(
    (value: GraphSearchOption | null) => {
      if (value === null) {
        setSelectedNode(null);
        sigma.setNodesState(sigma.getGraph().nodes(), { searchMatch: false, searchSelected: false });
      } else if (value.type === 'node') {
        sigma.setNodeState(value.id, { searchSelected: true });
        setSelectedNode(value.id);
      }

      // Reset graph state
      sigma.setGraphState({ searchActive: false });
      sigma.getGraph().forEachNode((id) => sigma.setNodeState(id, { searchMatch: false }));
      sigma.getGraph().forEachEdge((id) => sigma.setEdgeState(id, { searchMatch: false }));
    },
    [sigma],
  );

  /**
   * Used to post process the search result and populate the drop list as well as the sigma state.
   */
  const postSearchResult = useCallback(
    (options: GraphSearchOption[]): GraphSearchOption[] => {
      // Changing state of the results
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      const nodeIds = new Set<string>();
      const edgeIds = new Set<string>();
      options.forEach((item) => {
        if (item.type === 'node') nodeIds.add(item.id);
        if (item.type === 'edge') edgeIds.add(item.id);
      });
      sigma.getGraph().forEachNode((id) => sigma.setNodeState(id, { searchMatch: nodeIds.has(id) }));
      sigma.getGraph().forEachEdge((id) => sigma.setEdgeState(id, { searchMatch: edgeIds.has(id) }));
      sigma.setGraphState({ searchActive: nodeIds.size > 0 || edgeIds.size > 0 });

      // Filtering the result list to 10 result and display "more" message
      return options.length <= 10
        ? options
        : [
            ...options.slice(0, 10),
            {
              type: 'message',
              message: <span className="text-center text-muted">And {options.length - 10} others</span>,
            },
          ];
    },
    [sigma],
  );

  return (
    <>
      <FocusOnNode node={selectedNode} />
      {/* In this example we set minisearch options to allow searching on the node's attribute named \`tag\`.
          Node & edge attributes are indexed with the prefix \`prop_\` to avoid name collision. */}
      <GraphSearch
        type="nodes"
        value={selectedNode ? { type: 'node', id: selectedNode } : null}
        onFocus={onFocus}
        onChange={onChange}
        postSearchResult={postSearchResult}
        minisearchOptions={{ fields: ['prop_tag'] }}
      />
    </>
  );
};

export const GraphSearchDemo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph<Node, Edge>);

  return (
    <SigmaContainer options={sigmaOptions} style={style} graph={graph}>
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'top-right'}>
        <SearchNodeControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
`,H={component:u,id:"graph-search",title:"Graph Search"},l={name:"Sigma - Graph search",args:{},parameters:{storySource:{source:R}}};var p,m,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Sigma - Graph search',
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const B=["Default"];export{l as Default,B as __namedExportsOrder,H as default};
