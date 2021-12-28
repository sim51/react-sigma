import { isEqual } from "lodash";
import { useCallback, useRef, useState, useEffect } from "react";
import Graph from "graphology";

import { useSigma } from "@react-sigma/core";

export type LayoutWorkerHook<T> = (
  settings: T,
) => {
  stop: () => void;
  start: () => void;
  kill: () => void;
  isRunning: boolean;
};

interface GraphologyWorkerLayout {
  stop: () => void;
  start: () => void;
  kill: () => void;
}

interface GraphologyWorkerLayoutConstructor<T> {
  new (graph: Graph, settings: T): GraphologyWorkerLayout;
}

export function useWorkerLayoutFactory<T>(worker: GraphologyWorkerLayoutConstructor<T>): LayoutWorkerHook<T> {
  const hook: LayoutWorkerHook<T> = (parameter: T) => {
    const sigma = useSigma();
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [layout, setLayout] = useState<GraphologyWorkerLayout | null>(null);
    const settings = useRef<T>();
    if (!isEqual(settings.current, parameter)) settings.current = parameter;

    useEffect(() => {
      setIsRunning(false);
      let newLayout: GraphologyWorkerLayout | null = null;
      if (settings.current) newLayout = new worker(sigma.getGraph(), settings.current);
      setLayout(newLayout);
      return () => {
        if (newLayout !== null) newLayout.kill();
      };
    }, [sigma, settings, setLayout, setIsRunning]);

    const stop = useCallback(() => {
      if (layout) {
        layout.stop();
        setIsRunning(false);
      }
    }, [layout, setIsRunning]);

    const start = useCallback(() => {
      if (layout) {
        layout.start();
        setIsRunning(true);
      }
    }, [layout, setIsRunning]);

    const kill = useCallback(() => {
      if (layout) {
        layout.kill();
      }
      setIsRunning(false);
    }, [layout, setIsRunning]);

    return { stop, start, kill, isRunning };
  };
  return hook;
}
