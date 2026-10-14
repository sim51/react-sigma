import Sigma from 'sigma';

import { Document } from './types';

/**
 * Create a unique ID for nodes in the minisearch index.
 */
export function nodeIndexId(id: string): string {
  return `node¤${id}`;
}

/**
 * Create a unique ID for edges in the minisearch index.
 */
export function edgeIndexId(id: string): string {
  return `edge${id}`;
}

/**
 * Cast a node to a document to index.
 *
 * @category Utils
 */
export function nodeToDocument(sigma: Sigma, id: string): Document {
  const graph = sigma.getGraph();
  const attrs = graph.getNodeAttributes(id);
  const label = sigma.getNodeDisplayData(id)?.label;
  return {
    type: 'node',
    itemId: nodeIndexId(id),
    id: id,
    label,
    // to avoid collision with our internal data, we prefix properties
    ...Object.keys(attrs).reduce((acc, key) => ({ ...acc, [`prop_${key}`]: attrs[key] }), {}),
  };
}

/**
 * Cast an edge to a document to index.
 *
 * @category Utils
 */
export function edgeToDocument(sigma: Sigma, id: string): Document {
  const graph = sigma.getGraph();
  const attrs = graph.getEdgeAttributes(id);
  const label = sigma.getEdgeDisplayData(id)?.label;
  return {
    type: 'edge',
    itemId: edgeIndexId(id),
    id: id,
    label,
    // to avoid collision with our internal data, we prefix properties
    ...Object.keys(attrs).reduce((acc, key) => ({ ...acc, [`prop_${key}`]: attrs[key] }), {}),
  };
}
