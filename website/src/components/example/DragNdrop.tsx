import React, { FC, useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaContainer, useRegisterEvents, useSigma } from "@react-sigma/core";

import { GraphDefault } from "../GraphDefault";

const DragNdrop: FC = () => {
  const GraphEvents: React.FC = () => {
    const registerEvents = useRegisterEvents();
    const sigma = useSigma();
    const [draggedNode, setDraggedNode] = useState<string | null>(null);

    useEffect(() => {
      // Register the events
      registerEvents({
        downNode: (e) => {
          setDraggedNode(e.node);
          sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
        },
        mouseup: (e) => {
          if (draggedNode) {
            setDraggedNode(null);
            sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
            
            // Reset the bounding box around the whole graph
            // so that a "See whole graph" Zoom control button
            // would include dragged nodes if pressed.
            sigma.setCustomBBox(sigma.getBBox());
          }
        },
        mousedown: (e) => {
          
        },
        mousemove: (e) => {
          if (draggedNode) {
            // Get new position of node
            const pos = sigma.viewportToGraph(e);
            sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
            sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

            // Prevent sigma to move camera:
            e.preventSigmaDefault();
            e.original.preventDefault();
            e.original.stopPropagation();
          }
        },
        touchup: (e) => {
          if (draggedNode) {
            setDraggedNode(null);
            sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
            // Reset the bounding box around the whole graph
            // so that a "See whole graph" Zoom control button
            // would include dragged nodes if pressed.
            sigma.setCustomBBox(sigma.getBBox());
          }
        },
        touchdown: (e) => {
          
        },
        touchmove: (e) => {
          if (draggedNode) {
            // Get new position of node
            const pos = sigma.viewportToGraph(e.touches[0]);
            sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
            sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

            // Prevent sigma to move camera:
            e.original.preventDefault();
            e.original.stopPropagation();
          }
        },
      });
    }, [registerEvents, sigma, draggedNode]);

    return null;
  };

  return (
    <SigmaContainer style={{ height: "500px" }}>
      <GraphDefault order={100} probability={0.1} />
      <GraphEvents />
    </SigmaContainer>
  );
};

export default DragNdrop;
