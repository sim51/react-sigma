import { useSigma } from '@react-sigma/core';
import { Attributes } from 'graphology-types';
import MiniSearch, { Options } from 'minisearch';
import React from 'react';
import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react';

import { Document } from './types';
import { edgeToDocument, nodeToDocument } from './utils';

export interface GraphSearchContextType {
  index: MiniSearch;
}
const initialContext: GraphSearchContextType = {
  index: new MiniSearch({ fields: [] }),
};

/**
 * @hidden
 */
export const GraphSearchContext = createContext(initialContext);

export interface GraphSearchContextProviderProps {
  /**
   * The minisearch options for its construtor.
   */
  minisearchOptions?: Partial<Options<Document>>;
}
/**
 * Search context provider.
 * It exposes the minisearch instance to search in the graph and
 * is also responsible to keep the index up to date with the graph.
 *
 * You can override the minisearch options by passing them in the `minisearchOptions` prop.
 *
 * Documents in the index have the type {@link Document} :
 * - `id` is node or edge key in the graph
 * - `type` is "nodes" or "edges"
 * - `itemId` is the unique id in the index (concatenation of type and id)
 * - `label` is the label of the node or edge in the graph
 * - every attributes of the node or edge are also in the index, prefixed by `prop_`
 *
 *
 * @category Component
 */
export const GraphSearchContextProvider: FC<PropsWithChildren<GraphSearchContextProviderProps>> = ({
  children,
  minisearchOptions,
}) => {
  const [context, setContext] = useState(initialContext);
  const sigma = useSigma();

  useEffect(() => {
    const index = new MiniSearch<Document>({
      ...minisearchOptions,
      idField: 'itemId',
      fields: minisearchOptions?.fields
        ? ['label', ...minisearchOptions.fields.filter((e) => e !== 'label')]
        : ['label'],
      storeFields: minisearchOptions?.storeFields
        ? [
            'itemId',
            'id',
            'type',
            ...minisearchOptions.storeFields.filter((e) => !['itemId', 'id', 'type'].includes(e)),
          ]
        : ['itemId', 'id', 'type'],
      processTerm: minisearchOptions?.processTerm
        ? minisearchOptions?.processTerm
        : (term, _fieldName) =>
            term
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase(),
    });

    // index all
    const graph = sigma.getGraph();
    index.addAll(graph.nodes().map((id: string) => nodeToDocument(sigma, id)));
    index.addAll(graph.edges().map((id: string) => edgeToDocument(sigma, id)));

    // Listerns to sync graphology with minisearch
    function indexNode(payload: { key: string; attributes: Attributes }) {
      if (index.has(`nodes-${payload.key}`)) {
        index.replace(nodeToDocument(sigma, payload.key));
      } else {
        index.add(nodeToDocument(sigma, payload.key));
      }
    }
    function deleteNode(payload: { key: string; attributes: Attributes }) {
      if (index.has(`nodes-${payload.key}`)) {
        index.discard(`nodes-${payload.key}`);
      }
    }
    function indexEdge(payload: { key: string; attributes: Attributes }) {
      if (index.has(`edges-${payload.key}`)) {
        index.replace(edgeToDocument(sigma, payload.key));
      } else {
        index.add(edgeToDocument(sigma, payload.key));
      }
    }
    function deleteEdge(payload: { key: string; attributes: Attributes }) {
      if (index.has(`edges-${payload.key}`)) {
        index.discard(`edges-${payload.key}`);
      }
    }
    graph.on('nodeAdded', indexNode);
    graph.on('nodeAttributesUpdated', indexNode);
    graph.on('nodeDropped', deleteNode);
    graph.on('edgeAdded', indexEdge);
    graph.on('edgeAttributesUpdated', indexEdge);
    graph.on('edgeDropped', deleteEdge);

    setContext({ index });

    return () => {
      graph.off('nodeAdded', indexNode);
      graph.off('nodeAttributesUpdated', indexNode);
      graph.off('nodeDropped', deleteNode);
      graph.off('edgeAdded', indexEdge);
      graph.off('edgeAttributesUpdated', indexEdge);
      graph.off('edgeDropped', deleteEdge);
    };
  }, [sigma, minisearchOptions]);

  return <GraphSearchContext.Provider value={context}>{children}</GraphSearchContext.Provider>;
};
