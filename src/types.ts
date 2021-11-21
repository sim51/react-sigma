import { CameraState, MouseCoords, TouchCoords } from "sigma/types";

export interface MouseEvent {
  event: MouseCoords;
}

export interface TouchEvent {
  event: TouchCoords;
}

export interface NodeEvent {
  node: string;
}

export type MouseNodeEVent = MouseEvent & NodeEvent;

/**
 * Sigma's events
 */
export interface EventHandlers {
  /**
   * Trigger when the user click on a node
   */
  clickNode: ({ node, event }: MouseNodeEVent) => void;
  /**
   * Trigger when the user right click on a node
   */
  rightClickNode: ({ node, event }: MouseNodeEVent) => void;
  /**
   * Trigger when the user click/tap on a node
   */
  downNode: ({ node, event }: MouseNodeEVent) => void;
  /**
   * Trigger when the user enter a node with the mouse
   */
  enterNode: ({ node }: NodeEvent) => void;
  /**
   * Trigger when the user leave a node.with the mouse
   */
  leaveNode: ({ node }: NodeEvent) => void;
  /**
   * Trigger when the user click on the background
   */
  clickStage: ({ event }: MouseEvent) => void;
  /**
   * Trigger when the user right click on the background
   */
  rightClickStage: ({ event }: MouseEvent) => void;
  /**
   * Trigger when the user click/tap on the background
   */
  downStage: ({ event }: MouseEvent) => void;
  /**
   * Trigger on mouse click
   */
  click: ({ event }: MouseEvent) => void;
  /**
   * Trigger on mouse right click
   */
  rightClick: ({ event }: MouseEvent) => void;
  /**
   * Trigger on mouse up
   */
  mouseup: ({ event }: MouseEvent) => void;
  /**
   * Trigger on mouse down
   */
  mousedown: ({ event }: MouseEvent) => void;
  /**
   * Trigger on mouse move
   */
  mousemove: ({ event }: MouseEvent) => void;
  /**
   *Trigger on touch up
   */
  touchup: ({ event }: TouchEvent) => void;
  /**
   *Trigger on touch down
   */
  touchdown: ({ event }: TouchEvent) => void;
  /**
   *Trigger on touch move
   */
  touchmove: ({ event }: TouchEvent) => void;
  /**
   * Trigger when sigma is killed
   */
  kill: () => void;
  /**
   * Trigger when the sigma's camera changes
   */
  cameraUpdated: (e: CameraState) => void;
}
