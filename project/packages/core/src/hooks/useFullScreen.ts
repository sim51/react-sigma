import { useEffect, useState, useCallback } from "react";
import { useSigmaContext } from "./context";

function toggleFullScreen(dom: HTMLElement) {
  if (document.fullscreenElement !== dom) {
    dom.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/**
 * React hook that helps you to set graph in fullmode.
 *
 * ```typescript
 * const {toggle, isFullScreen} = useFullscreen();
 *```
 * @category Hook
 */
export function useFullScreen(
  container?: HTMLElement | null,
): {
  toggle: () => void;
  isFullScreen: boolean;
} {
  const context = useSigmaContext();
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement>(container ? container : context.container);
  const toggleState = () => setFullScreen((v) => !v);

  useEffect(() => {
    document.addEventListener("fullscreenchange", toggleState);
    return () => document.removeEventListener("fullscreenchange", toggleState);
  }, [toggleState]);

  useEffect(() => {
    setElement(container || context.container);
  }, [container, context.container]);

  const toggle = useCallback(() => {
    toggleFullScreen(element);
  }, [element]);

  return {
    toggle,
    isFullScreen,
  };
}
