import AbstractGraph, { Attributes, GraphOptions } from 'graphology-types';
import { CameraEvents, MouseCaptorEvents, SigmaEvents, TouchCaptorEvents } from 'sigma/types';

/**
 * Sigma's events
 */
export type EventHandlers = SigmaEvents & TouchCaptorEvents & MouseCaptorEvents & CameraEvents;

/**
 * Graph type helpers.
 */
type GraphConstructor<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
> = new (options?: GraphOptions) => AbstractGraph<N, E, G>;
export type GraphType<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
> = AbstractGraph<N, E, G> | GraphConstructor<N, E, G>;
