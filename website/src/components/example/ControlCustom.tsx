import React, { FC } from "react";
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

import { GraphDefault } from "../GraphDefault";

const ControlCustom: FC = () => {
  return (
    <SigmaContainer style={{ height: "500px" }}>
      <GraphDefault order={100} probability={0.01} />
      <ControlsContainer position={"bottom-right"}>
        <ZoomControl>
          <AiOutlineZoomIn />
          <AiOutlineZoomOut />
          <MdFilterCenterFocus />
        </ZoomControl>
        <FullScreenControl>
          <AiOutlineFullscreen />
          <AiOutlineFullscreenExit />
        </FullScreenControl>
        <LayoutForceAtlas2Control autoRunFor={500}>
          <AiFillPlayCircle />
          <AiFillPauseCircle />
        </LayoutForceAtlas2Control>
      </ControlsContainer>
    </SigmaContainer>
  );
};

export default ControlCustom;
