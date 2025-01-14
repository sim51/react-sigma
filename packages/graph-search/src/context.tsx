import React from "react";
import MiniSearch from "minisearch";
import { useSigma } from "@react-sigma/core";
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { edgeToDocument, nodeToDocument } from "./utils";
import { Attributes } from "graphology-types";

export interface GraphSearchContextType {
  index: MiniSearch;
}
const initialContext: GraphSearchContextType = {
  index: new MiniSearch({ fields: [] }),
};
export const GraphSearchContext = createContext(initialContext);

/**
 * Search context provider.
 */
export const GraphSearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [context, setContext] = useState(initialContext);
  const sigma = useSigma();

  useEffect(() => {
    const index = new MiniSearch({
      idField: "itemId",
      fields: ["label"],
      storeFields: ["itemId", "id", "type"],
      processTerm: (term, _fieldName) =>
        term
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
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
    graph.on("nodeAdded", indexNode);
    graph.on("nodeAttributesUpdated", indexNode);
    graph.on("nodeDropped", deleteNode);
    graph.on("edgeAdded", indexEdge);
    graph.on("edgeAttributesUpdated", indexEdge);
    graph.on("edgeDropped", deleteEdge);

    setContext({ index });

    return () => {
      graph.off("nodeAdded", indexNode);
      graph.off("nodeAttributesUpdated", indexNode);
      graph.off("nodeDropped", deleteNode);
      graph.off("edgeAdded", indexEdge);
      graph.off("edgeAttributesUpdated", indexEdge);
      graph.off("edgeDropped", deleteEdge);
    };
  }, [sigma]);

  return <GraphSearchContext.Provider value={context}>{children}</GraphSearchContext.Provider>;
};
