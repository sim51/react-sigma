import { FC, useEffect, useState } from "react";
import Graph from "graphology";
import { Attributes } from "graphology-types";
import circularLayout from "graphology-layout/circular";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "react-sigma-v2";

const DEFAULT_GRAPH = "/airport-network.json";

export const MyCustomGraph: FC = () => {
  // hooks
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();

  // State for the graph url to load
  const [graphUrl, setGraphUrl] = useState<string>(DEFAULT_GRAPH);
  // State for the graph hovered node
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  /**
   * When component mount
   *  - we set sigma settings
   *  - we register events
   */
  useEffect(() => {
    // Register Sigma events
    registerEvents({
      enterNode: ({ node }) => setHoveredNode(node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [sigma, registerEvents]);

  /**
   * When url param changes, we set it in the state.
   */
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const url = queryParams.get("url");
    if (url) setGraphUrl(url);
    else setGraphUrl(DEFAULT_GRAPH);
  }, []);

  /**
   * When graph url changes, we compute the graph and load it in sigma
   */
  useEffect(() => {
    setHoveredNode(null);
    fetch(graphUrl)
      .then(async response => {
        if (response.ok) {
          const json = await response.json();
          const graph = Graph.from(json);
          circularLayout.assign(graph);
          loadGraph(graph);
        } else {
          console.log("Error when retrieving graph", response);
        }
      })
      .catch(e => {
        console.log("Error when retrieving graph", e);
      });
  }, [graphUrl, loadGraph]);

  /**
   * When the hoverer node change
   *  - we update the reducers
   */
  useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph();
        const newData: Attributes = { ...data, highlighted: data.highlighted || false };

        if (hoveredNode) {
          if (node === hoveredNode || (graph.neighbors(hoveredNode) as Array<string>).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph();
        const newData = { ...data, hidden: false };
        if (hoveredNode && !(graph.extremities(edge) as Array<string>).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [sigma, setSettings, hoveredNode]);

  return null;
};
