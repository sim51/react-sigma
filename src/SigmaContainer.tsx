import React, { CSSProperties, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Sigma } from "sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { GraphOptions } from "graphology-types";
import { SigmaProvider } from "./context";
import { isEqual } from "lodash";

/**
 * Properties for `SigmaContainer` component
 */
export interface SigmaContainerProps {
  /**
   * Graphology settings for the Sigma underlying graph
   */
  graphOptions?: Partial<GraphOptions>;
  /**
   * Sigma initial settings
   */
  initialSettings?: Partial<Settings>;
  /**
   * HTML id
   */
  id?: string;
  /**
   * HTML class
   */
  className?: string;
  /**
   * HTML CSS style
   */
  style?: CSSProperties;
  /**
   * @hidden
   */
  children?: ReactNode;
}

/**
 * The `SigmaContainer` component is responsible of create the Sigma instance, and provide it to its child components using a React Context that can be accessible via the hook {@link useSigma}.
 *
 * ```typescript
 * <SigmaContainer id="sigma-graph">
 *   <MyCustomGraph />
 * </SigmaContainer>
 *```
 * See [[SigmaContainerProps]] for more information.
 *
 * @category Component
 */
export const SigmaContainer: React.FC<SigmaContainerProps> = ({
  graphOptions,
  id,
  className,
  style,
  initialSettings,
  children,
}: SigmaContainerProps) => {
  // HTML element for the sigma instance
  const containerRef = useRef<HTMLDivElement>(null);
  // Common html props for the container
  const [props] = useState({ className: `react-sigma-v2 ${className ? className : ""}`, id, style });
  // Sigma instance
  const [sigma, setSigma] = useState<Sigma | null>(null);
  // Sigma settings
  const settings = useRef<Partial<Settings>>();
  if (!isEqual(settings.current, initialSettings)) settings.current = initialSettings;
  // Graph options
  const graph = useRef<Partial<GraphOptions>>();
  if (!isEqual(graph.current, graphOptions)) graph.current = graphOptions;

  // When graphOptions or settings changed
  useEffect(() => {
    let instance: Sigma | null = null;

    if (containerRef.current !== null) {
      instance = new Sigma(new Graph(graph.current), containerRef.current, settings.current);
      setSigma(instance);
    }

    return () => {
      setSigma(() => {
        if (instance) {
          instance.kill();
        }
        return null;
      });
    };
  }, [containerRef, graph, settings]);

  const context = useMemo(() => (sigma ? { sigma } : null), [sigma]);
  const contents = context !== null ? <SigmaProvider value={context}>{children}</SigmaProvider> : null;

  return (
    <div {...props}>
      <div className={"sigma-container"} ref={containerRef}></div>
      {contents}
    </div>
  );
};
