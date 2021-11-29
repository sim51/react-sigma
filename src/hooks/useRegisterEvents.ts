import { useEffect, useState } from "react";
import { useSigma } from "./useSigma";
import { EventHandlers } from "../types";

type EventType = keyof EventHandlers;

const sigmaEvents: Array<EventType> = [
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
  "kill",
];
const mouseEvents: Array<EventType> = ["click", "rightClick", "mouseup", "mousedown", "mousemove"];
const touchEvents: Array<EventType> = ["mouseup", "mousedown", "mousemove"];
const cameraEvents: Array<EventType> = ["cameraUpdated"];

/**
 * React hook that helps you to listen Sigma’s events.
 * It handles for you all the lifecyle of listener (ie. on / remove)
 *
 * ```typescript
 * const registerEvents = useRegisterEvents();
 * registerEvents({
 *  enterNode: event => setHoveredNode(event.node),
 *  leaveNode: event => setHoveredNode(null),
 * });
 *```
 * @category Hook
 */
export function useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    let event: EventType;

    if (!sigma || !eventHandlers) {
      return;
    }

    for (event in eventHandlers) {
      const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
      if (sigmaEvents.includes(event)) {
        sigma.on(event, eventHandler);
      }
      if (mouseEvents.includes(event)) {
        sigma.getMouseCaptor().on(event, eventHandler);
      }
      if (touchEvents.includes(event)) {
        sigma.getTouchCaptor().on(event, eventHandler);
      }
      if (cameraEvents.includes(event)) {
        // For now there is only one event on the camera
        sigma.getCamera().on("updated", eventHandler);
      }
    }

    // cleanup
    return () => {
      let event: EventType;
      for (event in eventHandlers) {
        const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
        if (sigmaEvents.includes(event)) {
          sigma.removeListener(event, eventHandler);
        }
        if (mouseEvents.includes(event)) {
          sigma.getMouseCaptor().removeListener(event, eventHandler);
        }
        if (touchEvents.includes(event)) {
          sigma.getTouchCaptor().removeListener(event, eventHandler);
        }
        if (cameraEvents.includes(event)) {
          // For now there is only one event on the camera
          sigma.getCamera().removeListener("updated", eventHandler);
        }
      }
    };
  }, [sigma, eventHandlers]);

  return setEventHandlers;
}
