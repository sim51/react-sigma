import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import {AiOutlineZoomIn, AiOutlineZoomOut,AiOutlineFullscreenExit, AiOutlineFullscreen, AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import {MdFilterCenterFocus} from "react-icons/md";

import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl} from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { MyGraph } from "./my-graph";

export const CustomButtonsView: FC = () => {
  const [searchParams] = useSearchParams();
  const faTime = Number.parseInt(searchParams.get("faTime") || "2000");
  return (
    <SigmaContainer>
      <MyGraph />
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
          <AiFillPlayCircle/>
          <AiFillPauseCircle/>
        </LayoutForceAtlas2Control>
      </ControlsContainer>
    </SigmaContainer>
  );
};
