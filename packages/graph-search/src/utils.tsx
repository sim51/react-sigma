import Sigma from 'sigma';

import { Document } from './types';

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
    type: 'nodes',
    itemId: `nodes-${id}`,
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
    type: 'edges',
    itemId: `edges-${id}`,
    id: id,
    label,
    // to avoid collision with our internal data, we prefix properties
    ...Object.keys(attrs).reduce((acc, key) => ({ ...acc, [`prop_${key}`]: attrs[key] }), {}),
  };
}
