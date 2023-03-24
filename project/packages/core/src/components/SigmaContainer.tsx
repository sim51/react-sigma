import React, {
  CSSProperties,
  Ref,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { isEqual } from "lodash";
import Graph from "graphology";
import { GraphConstructor } from "graphology-types";
import { Sigma } from "sigma";
import { Settings } from "sigma/settings";

import { SigmaProvider } from "../hooks/context";

/**
 * Properties for `SigmaContainer` component
 */
export interface SigmaContainerProps {
  /**
   * Graphology instance or constructor
   */
  graph?: Graph | GraphConstructor;
  /**
   * Sigma settings
   */
  settings?: Partial<Settings>;
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
}

/**
 * The `SigmaContainer` component is responsible of create the Sigma instance, and provide it to its child components using a React Context that can be accessible via the hook {@link useSigma}.
 *
 * ```jsx
 * <SigmaContainer id="sigma-graph">
 *   <MyCustomGraph />
 * </SigmaContainer>
 *```
 * See [[SigmaContainerProps]] for more information.
 *
 * @category Component
 */
// eslint-disable-next-line react/display-name
const SigmaContainerComponent = (
  { graph, id, className, style, settings, children }: PropsWithChildren<SigmaContainerProps>,
  ref: Ref<Sigma | null>,
) => {
  // Root HTML element
  const rootRef = useRef<HTMLDivElement>(null);
  // HTML element for the sigma instance
  const containerRef = useRef<HTMLDivElement>(null);
  // Common html props for the container
  const props = { className: `react-sigma ${className ? className : ""}`, id, style };
  // Sigma instance
  const [sigma, setSigma] = useState<Sigma | null>(null);
  // Sigma settings
  const sigmaSettings = useRef<Partial<Settings>>({});
  if (!isEqual(sigmaSettings.current, settings)) sigmaSettings.current = settings || {};

  /**
   * When graph or settings changed
   * => create sigma
   */
  useEffect(() => {
    let instance: Sigma | null = null;

    if (containerRef.current !== null) {
      const sigGraph = graph ? (typeof graph === "function" ? new graph() : graph) : new Graph();
      instance = new Sigma(sigGraph, containerRef.current, { allowInvalidContainer: true, ...sigmaSettings.current });
      if (sigma) instance.getCamera().setState(sigma.getCamera().getState());
    }
    setSigma(instance);

    return () => {
      if (instance) {
        instance.kill();
      }
      setSigma(null);
    };
  }, [containerRef, graph, sigmaSettings]);

  /**
   * Forward the sigma ref
   */
  useImperativeHandle(ref, () => sigma, [sigma]);

  /**
   * Memoify the context
   */
  const context = useMemo(
    () => (sigma && rootRef.current ? { sigma, container: rootRef.current as HTMLElement } : null),
    [sigma, rootRef.current],
  );

  // When context is created we provide it to children
  const contents = context !== null ? <SigmaProvider value={context}>{children}</SigmaProvider> : null;

  return (
    <div {...props} ref={rootRef}>
      <div className="sigma-container" ref={containerRef} />
      {contents}
    </div>
  );
};

export const SigmaContainer = forwardRef(SigmaContainerComponent);
