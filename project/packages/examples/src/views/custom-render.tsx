import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import { MdFilterCenterFocus } from "react-icons/md";

import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { SampleGraph } from "../common/SampleGraph";

export const CustomRenderView: FC = () => {
  const [searchParams] = useSearchParams();
  const faTime = Number.parseInt(searchParams.get("faTime") || "2000");
  const settings = useMemo(() => ({ renderLabels: false }), []);

  return (
    <SigmaContainer settings={settings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }}>
          <AiOutlineZoomIn />
          <AiOutlineZoomOut />
          <MdFilterCenterFocus />
        </ZoomControl>
        <FullScreenControl labels={{ enter: "ENTER", exit: "EXIT" }}>
          <AiOutlineFullscreen />
          <AiOutlineFullscreenExit />
        </FullScreenControl>
        <LayoutForceAtlas2Control labels={{ stop: "STOP", start: "START" }} autoRunFor={faTime}>
          <AiFillPlayCircle />
          <AiFillPauseCircle />
        </LayoutForceAtlas2Control>
      </ControlsContainer>
    </SigmaContainer>
  );
};
