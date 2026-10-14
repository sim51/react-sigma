import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import '@react-sigma/graph-search/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { layerImage } from '@sigma/node-image';
import Graph from 'graphology';
import { Attributes, SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import jsonGraph from '../public/react-sigma/demo/dataset.json';
import { EdgeState, GraphState, NodeState, SEARCH_NODES_STYLE, SearchNodeControl } from './common/SearchNodeControl';

// Sigma settings
const sigmaOptions: SigmaOptions<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState> = {
  settings: {
    allowInvalidContainer: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    itemSizesReference: 'screen' as const,
  },
  primitives: {
    nodes: {
      variables: { image: { type: 'string', default: '/' } },
      layers: [layerFill(), layerImage()],
    },
  },
  styles: {
    nodes: [
      DEFAULT_STYLES.nodes,
      {
        labelFont: 'Lato, sans-serif',
      },
      ...(Array.isArray(SEARCH_NODES_STYLE) ? SEARCH_NODES_STYLE : [SEARCH_NODES_STYLE]),
    ],
  },
};

export const Demo: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer options={sigmaOptions} style={style} graph={Graph.from(jsonGraph as SerializedGraph)}>
    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
      <LayoutForceAtlas2Control />
    </ControlsContainer>

    <ControlsContainer position={'bottom-left'}>
      <MiniMap width="100px" height="100px" />
    </ControlsContainer>

    <ControlsContainer position={'top-right'}>
      <SearchNodeControl />
    </ControlsContainer>
  </SigmaContainer>
);
