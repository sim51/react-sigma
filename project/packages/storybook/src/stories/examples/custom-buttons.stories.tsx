import { FC } from "react";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import { MdFilterCenterFocus } from "react-icons/md";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

import { GraphDefault } from "../../utils/components/GraphDefault";

export default {
  title: "Examples/Custom",
  component: SigmaContainer,
  parameters: {
    docs: {
      description: {
        component: "Example for button customization with the icon/text you want",
      },
    },
  },
};

export const Custom: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const faTime = Number.parseInt(urlParams.get("faTime") || "2000");
  return (
    <SigmaContainer style={{ width: "100%", height: "calc(100vh - 2em)" }}>
      <GraphDefault order={100} probability={0.1} />
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
        <LayoutForceAtlas2Control autoRunFor={faTime}>
          <AiFillPlayCircle />
          <AiFillPauseCircle />
        </LayoutForceAtlas2Control>
      </ControlsContainer>
    </SigmaContainer>
  );
};
