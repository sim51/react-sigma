import { CameraState } from "sigma/types";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "./hooks";
import { SigmaContainer, SigmaContainerProps } from "./SigmaContainer";
import { ControlsContainer, ControlsContainerProps } from "./controls/ControlsContainer";
import { ForceAtlasControl, ForceAtlasControlProps } from "./controls/ForceAtlasControl";
import { ZoomControl, ZoomControlProps } from "./controls/ZoomControl";
import { FullScreenControl } from "./controls/FullScreenControl";
import { SearchControl } from "./controls/SearchControl";

/**
 * Sigma's events
 */
interface EventHandlers {
  /**
   * Trigger when the user click on a node
   */
  clickNode: ({ node: NodeKey, event: MouseCoords }) => void;
  /**
   * Trigger when the user right click on a node
   */
  rightClickNode: ({ node: NodeKey, event: MouseCoords }) => void;
  /**
   * Trigger when the user click/tap on a node
   */
  downNode: ({ node: NodeKey, event: MouseCoords }) => void;
  /**
   * Trigger when the user enter a node with the mouse
   */
  enterNode: ({ node: NodeKey }) => void;
  /**
   * Trigger when the user leave a node.with the mouse
   */
  leaveNode: ({ node: NodeKey }) => void;
  /**
   * Trigger when the user click on the background
   */
  clickStage: ({ event: MouseCoords }) => void;
  /**
   * Trigger when the user right click on the background
   */
  rightClickStage: ({ event: MouseCoords }) => void;
  /**
   * Trigger when the user click/tap on the background
   */
  downStage: ({ event: MouseCoords }) => void;
  /**
   * Trigger when sigma is killed
   */
  kill: () => void;
  /**
   * Trigger when the sigma's camera changes
   */
  cameraUpdated: (e: CameraState) => void;
}

export {
  ControlsContainer,
  ControlsContainerProps,
  EventHandlers,
  ForceAtlasControl,
  FullScreenControl,
  SearchControl,
  SigmaContainer,
  SigmaContainerProps,
  ZoomControl,
  ZoomControlProps,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
};
