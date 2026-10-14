import { useSigma } from '@react-sigma/core';
import { GraphSearch, GraphSearchOption } from '@react-sigma/graph-search';
import { Attributes } from 'graphology-types';
import { FC, useCallback, useState } from 'react';
import { SigmaOptions } from 'sigma/types';

import { FocusOnNode } from './FocusOnNode';

export type NodeState = {
  searchMatch: boolean;
  searchSelected: boolean;
};
export type EdgeState = {
  searchMatch: boolean;
  searchSelected: boolean;
};
export type GraphState = {
  searchActive: boolean;
};

export const SEARCH_NODES_STYLE: NonNullable<
  NonNullable<SigmaOptions<Attributes, Attributes, Attributes, NodeState, EdgeState, GraphState>['styles']>['nodes']
> = [
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
];

export const SearchNodeControl: FC = () => {
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
      {/* In this example we set minisearch options to allow searching on the node's attribute named `tag`.
          Node & edge attributes are indexed with the prefix `prop_` to avoid name collision. */}
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
