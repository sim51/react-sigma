import { FC, useEffect, useMemo, CSSProperties } from "react";
import { MultiDirectedGraph as MultiGraphConstructor } from "graphology";
import EdgeCurveProgram, { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from "@sigma/edge-curve";
import { EdgeArrowProgram } from "sigma/rendering";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

interface NodeType {
  x: number;
  y: number;
  label: string;
  size: number;
  color: string;
}
interface EdgeType {
  type?: string;
  label?: string;
  size?: number;
  curvature?: number;
  parallelIndex?: number;
  parallelMaxIndex?: number;
}

const MyGraph: React.FC = () => {
  const { faker, randomColor } = useRandom();
  const loadGraph = useLoadGraph<NodeType, EdgeType>();

  useEffect(() => {
    // Create the graph
    const graph = new MultiGraphConstructor<NodeType, EdgeType>();

    graph.addNode("a", {
      x: 0,
      y: 0,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("b", {
      x: 1,
      y: -1,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("c", {
      x: 3,
      y: -2,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("d", {
      x: 1,
      y: -3,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("e", {
      x: 3,
      y: -4,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });
    graph.addNode("f", {
      x: 4,
      y: -5,
      size: faker.number.int({ min: 4, max: 20 }),
      color: randomColor(),
      label: faker.person.fullName(),
    });

    graph.addEdge("a", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("b", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("b", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("c", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("c", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("e", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("e", "f", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });
    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });

    // Use dedicated helper to identify parallel edges:
    indexParallelEdgesIndex(graph, { edgeIndexAttribute: "parallelIndex", edgeMaxIndexAttribute: "parallelMaxIndex" });

    // Adapt types and curvature of parallel edges for rendering:
    graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {
      if (typeof parallelIndex === "number") {
        graph.mergeEdgeAttributes(edge, {
          type: "curved",
          curvature: DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),
        });
      } else {
        graph.setEdgeAttribute(edge, "type", "straight");
      }
    });

    // load the graph in sigma
    loadGraph(graph);
  }, [loadGraph, faker, randomColor]);

  return null;
};

export const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => {
  // Sigma settings
  const settings = useMemo(
    () => ({
      allowInvalidContainer: true,
      renderEdgeLabels: true,
      defaultEdgeType: "straight",
      edgeProgramClasses: {
        straight: EdgeArrowProgram,
        curved: EdgeCurveProgram,
      },
    }),
    [],
  );

  return (
    <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} settings={settings}>
      <MyGraph />
    </SigmaContainer>
  );
};
