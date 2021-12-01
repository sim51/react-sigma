import { CameraState, MouseCoords, TouchCoords, WheelCoords } from "sigma/types";

export interface MouseEvent {
  event: MouseCoords;
  preventSigmaDefault: () => void;
}

export interface TouchEvent {
  event: TouchCoords;
}

export interface NodeEvent {
  node: string;
}

export interface WheelEvent {
  event: WheelCoords;
  preventSigmaDefault: () => void;
}

export interface EdgeEvent {
  edge: string;
}

export type MouseNodeEvent = MouseEvent & NodeEvent;
export type WheelNodeEvent = WheelEvent & NodeEvent;

export type MouseEdgeEvent = MouseEvent & EdgeEvent;
export type WheelEdgeEvent = WheelEvent & EdgeEvent;

/**
 * Sigma's events
 */
export interface EventHandlers {
  /**
   * Trigger when the user click on a node
   */
  clickNode: (e: MouseNodeEvent) => void;
  /**
   * Trigger when the user right click on a node
   */
  rightClickNode: (e: MouseNodeEvent) => void;
  /**
   * Trigger when the user click/tap on a node
   */
  downNode: (e: MouseNodeEvent) => void;
  /**
   * Trigger when the user double click node a node.with the mouse
   */
  doubleClickNode: (e: MouseNodeEvent) => void;
  /**
   * Trigger when the user wheel node a node.with the mouse
   */
  wheelNode: (e: WheelNodeEvent) => void;
  /**
   * Trigger when the user enter a node with the mouse
   */
  enterNode: (e: NodeEvent) => void;
  /**
   * Trigger when the user leave a node.with the mouse
   */
  leaveNode: (e: NodeEvent) => void;

  /**
   * Trigger when the user click on a edge
   */
  clickEdge: (e: MouseEdgeEvent) => void;
  /**
   * Trigger when the user right click on a edge
   */
  rightClickEdge: (e: MouseEdgeEvent) => void;
  /**
   * Trigger when the user click/tap on a edge
   */
  downEdge: (e: MouseEdgeEvent) => void;
  /**
   * Trigger when the user double click edge a edge.with the mouse
   */
  doubleClickEdge: (e: MouseEdgeEvent) => void;
  /**
   * Trigger when the user wheel edge a edge.with the mouse
   */
  wheelEdge: (e: WheelEdgeEvent) => void;
  /**
   * Trigger when the user enter a edge with the mouse
   */
  enterEdge: (e: EdgeEvent) => void;
  /**
   * Trigger when the user leave a edge.with the mouse
   */
  leaveEdge: (e: EdgeEvent) => void;

  /**
   * Trigger when the user click on the background
   */
  clickStage: (e: MouseEvent) => void;
  /**
   * Trigger when the user right click on the background
   */
  rightClickStage: (e: MouseEvent) => void;
  /**
   * Trigger when the user double click on the background
   */
  doubleClickStage: (e: MouseEvent) => void;
  /**
   * Trigger when the user do a mouse wheel on the background
   */
  wheelStage: (e: WheelEvent) => void;
  /**
   * Trigger when the user click/tap on the background
   */
  downStage: (e: MouseEvent) => void;

  /**
   * Trigger on mouse click
   */
  click: (e: MouseCoords) => void;
  /**
   * Trigger on mouse double click
   */
  doubleClick: (e: MouseCoords) => void;
  /**
   * Trigger on mouse wheel
   */
  wheel: (e: WheelCoords) => void;
  /**
   * Trigger on mouse right click
   */
  rightClick: (e: MouseCoords) => void;
  /**
   * Trigger on mouse up
   */
  mouseup: (e: MouseCoords) => void;
  /**
   * Trigger on mouse down
   */
  mousedown: (e: MouseCoords) => void;
  /**
   * Trigger on mouse move
   */
  mousemove: (e: MouseCoords) => void;

  /**
   * Trigger on touch up
   */
  touchup: (e: TouchCoords) => void;
  /**
   * Trigger on touch down
   */
  touchdown: (e: TouchCoords) => void;
  /**
   * Trigger on touch move
   */
  touchmove: (e: TouchCoords) => void;

  /**
   * Trigger when sigma is killed
   */
  kill: () => void;

  /**
   * Trigger when the sigma's camera changes
   */
  cameraUpdated: (e: CameraState) => void;
}
