import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import '@react-sigma/graph-search/lib/style.css';
import { MiniMap } from '@react-sigma/minimap';
import { Attributes } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';
import { EdgeState, GraphState, NodeState, SEARCH_NODES_STYLE, SearchNodeControl } from './common/SearchNodeControl';

const sigmaOptions: SigmaOptions<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState> = {
  styles: {
    nodes: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      DEFAULT_STYLES.nodes as any,
      ...(Array.isArray(SEARCH_NODES_STYLE) ? SEARCH_NODES_STYLE : [SEARCH_NODES_STYLE]),
    ],
  },
};

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => (
  <SigmaContainer style={style} options={sigmaOptions}>
    <SampleGraph />

    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
      <LayoutsControl />
    </ControlsContainer>

    <ControlsContainer position={'top-right'}>
      <SearchNodeControl />
    </ControlsContainer>

    <ControlsContainer position={'bottom-left'}>
      <MiniMap width="100px" height="100px" />
    </ControlsContainer>
  </SigmaContainer>
);
