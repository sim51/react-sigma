import { useState, useEffect, useCallback } from "react";
import seedrandom from "seedrandom";
import { faker as fak, Faker, en } from "@faker-js/faker";
import Graph, { UndirectedGraph } from "graphology";
import erdosRenyi from "graphology-generators/random/erdos-renyi";

export type NodeType = { x: number; y: number; label: string; size: number; color: string; highlighted?: boolean };
export type EdgeType = { label: string };

/**
 * The goal of this file is to seed random generators if the query params 'seed' is present.
 * As an example you can go to http://localhost:8000/components.html?seed=foo and refresh multiple times the page
 * you should have the result. This feature is mainly used for the E2E test.
 *
 * For now it :
 * - replace the global `Math.random` with a seed one
 * - seed the faker library
 */
export const useRandom = () => {
  const [faker, setFaker] = useState<Faker>(fak);

  useEffect(() => {
    // Globally seed the Math.random
    const params = new URLSearchParams(document.location.search);
    const seed = params.get("seed"); // is the string "Jonathan"
    if (seed) {
      seedrandom(seed, { global: true });
      // seed faker with the random function
      const f = new Faker({ locale: en });
      f.seed(Math.random());
      setFaker(f);
    }
  }, [document.location]);

  const randomColor = useCallback(() => {
    const digits = "0123456789abcdef";
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += digits.charAt(Math.floor(Math.random() * 16));
    }
    return code;
  }, [faker]);

  const randomGraph = useCallback(() => {
    // Create the graph
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.1 });
    graph.nodes().forEach((node: string) => {
      graph.mergeNodeAttributes(node, {
        label: faker.person.fullName(),
        size: faker.number.int({ min: 4, max: 20 }),
        color: randomColor(),
        x: Math.random(),
        y: Math.random(),
        // for node-border
        borderColor: randomColor(),
        borderSize: faker.number.float({ min: 0, max: 1, precision: 0.1 }),
        // for node-image
        pictoColor: randomColor(),
        image: faker.image.urlLoremFlickr(),
      });
    });
    return graph as Graph<NodeType, EdgeType>;
  }, [faker]);

  return { faker, randomColor, randomGraph };
};
