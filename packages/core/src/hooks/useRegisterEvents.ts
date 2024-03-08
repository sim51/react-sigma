import { useEffect, useState } from "react";
import { SigmaEvents, TouchCaptorEvents, MouseCaptorEvents, CameraEvents } from "sigma/types";

import { useSigma } from "./useSigma";
import { useSetSettings } from "./useSetSettings";
import { EventHandlers } from "../types";
import { Attributes } from "graphology-types";

type EventType = keyof EventHandlers;

const sigmaEvents: Array<keyof SigmaEvents> = [
  "clickNode",
  "rightClickNode",
  "downNode",
  "enterNode",
  "leaveNode",
  "doubleClickNode",
  "wheelNode",
  "clickEdge",
  "rightClickEdge",
  "downEdge",
  "enterEdge",
  "leaveEdge",
  "doubleClickEdge",
  "wheelEdge",
  "clickStage",
  "rightClickStage",
  "downStage",
  "doubleClickStage",
  "wheelStage",
  "beforeRender",
  "afterRender",
  "kill",
];
const mouseEvents: Array<keyof MouseCaptorEvents> = [
  "click",
  "rightClick",
  "mouseup",
  "mousedown",
  "mousemove",
  "mousemovebody",
  "doubleClick",
  "wheel",
];
const touchEvents: Array<keyof TouchCaptorEvents> = ["touchup", "touchdown", "touchmove"];
const cameraEvents: Array<keyof CameraEvents> = ["updated"];

/**
 * React hook that helps you to listen Sigma’s events.
 * It handles for you all the lifecyle of listener (ie. on / remove)
 *
 * ```typescript
 * const registerEvents = useRegisterEvents();
 * const [setHoveredNode,setHoveredNode] = useState<string|null>(null);
 * ...
 * useEffect(() => {
 *  registerEvents({
 *    enterNode: event => setHoveredNode(event.node),
 *    leaveNode: event => setHoveredNode(null),
 *  });
 * }, []);
 *```
 * @category Hook
 */
export function useRegisterEvents<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
>(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma<N, E, G>();
  const setSettings = useSetSettings<N, E, G>();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    if (!sigma || !eventHandlers) {
      return;
    }

    const userEvents = eventHandlers;

    // list of event types to register
    const eventTypes = Object.keys(userEvents) as Array<EventType>;

    // register events
    eventTypes.forEach((event: EventType) => {
      const eventHandler = userEvents[event] as (...args: unknown[]) => void;
      if (sigmaEvents.find((e) => e === event)) {
        sigma.on(event as keyof SigmaEvents, eventHandler);
      }
      if (mouseEvents.find((e) => e === event)) {
        sigma.getMouseCaptor().on(event as keyof MouseCaptorEvents, eventHandler);
      }
      if (touchEvents.find((e) => e === event)) {
        sigma.getTouchCaptor().on(event as keyof TouchCaptorEvents, eventHandler);
      }
      if (cameraEvents.find((e) => e === event)) {
        sigma.getCamera().on(event as keyof CameraEvents, eventHandler);
      }
    });

    // cleanup
    return () => {
      // remove events listener
      if (sigma) {
        eventTypes.forEach((event: EventType) => {
          const eventHandler = userEvents[event] as (...args: unknown[]) => void;
          if (sigmaEvents.find((e) => e === event)) {
            sigma.off(event as keyof SigmaEvents, eventHandler);
          }
          if (mouseEvents.find((e) => e === event)) {
            sigma.getMouseCaptor().off(event as keyof MouseCaptorEvents, eventHandler);
          }
          if (touchEvents.find((e) => e === event)) {
            sigma.getTouchCaptor().off(event as keyof TouchCaptorEvents, eventHandler);
          }
          if (cameraEvents.find((e) => e === event)) {
            sigma.getCamera().off(event as keyof CameraEvents, eventHandler);
          }
        });
      }
    };
  }, [sigma, eventHandlers, setSettings]);

  return setEventHandlers;
}
