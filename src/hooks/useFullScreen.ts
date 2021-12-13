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
export function useFullScreen(): { toggle: () => void; isFullScreen: boolean } {
  const { container } = useSigmaContext();
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const toggleState = () => setFullScreen(v => !v);

  useEffect(() => {
    document.addEventListener("fullscreenchange", toggleState);
    return () => document.removeEventListener("fullscreenchange", toggleState);
  }, [toggleState]);

  const toggle = useCallback(() => {
    toggleFullScreen(container);
  }, [container]);

  return {
    toggle,
    isFullScreen,
  };
}
