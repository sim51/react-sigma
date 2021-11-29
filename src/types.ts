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

export interface EdgeEvent {
  edge: string;
}

export type MouseNodeEVent = MouseEvent & NodeEvent;

export type MouseEdgeEVent = MouseEvent & EdgeEvent;

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
   * Trigger when the user double click node a node.with the mouse
   */
  doubleClickNode: ({ node }: NodeEvent) => void;
  /**
   * Trigger when the user wheel node a node.with the mouse
   */
  wheelNode: ({ node }: NodeEvent) => void;

  /**
   * Trigger when the user click on a edge
   */
  clickEdge: ({ edge, event }: MouseEdgeEVent) => void;
  /**
   * Trigger when the user right click on a edge
   */
  rightClickEdge: ({ edge, event }: MouseEdgeEVent) => void;
  /**
   * Trigger when the user click/tap on a edge
   */
  downEdge: ({ edge, event }: MouseEdgeEVent) => void;
  /**
   * Trigger when the user enter a edge with the mouse
   */
  enterEdge: ({ edge }: EdgeEvent) => void;
  /**
   * Trigger when the user leave a edge.with the mouse
   */
  leaveEdge: ({ edge }: EdgeEvent) => void;
  /**
   * Trigger when the user double click node a node.with the mouse
   */
  doubleClickEdge: ({ edge }: EdgeEvent) => void;
  /**
   * Trigger when the user wheel node a node.with the mouse
   */
  wheelEdge: ({ edge }: EdgeEvent) => void;

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
