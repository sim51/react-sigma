import React, { FC, ReactNode, useMemo } from "react";
import { Node, NodeProps } from "./Node";
import { useSigma } from "@react-sigma/core";
import { Labels } from "./types";

export const Edge: FC<{
  source: NodeProps;
  target: NodeProps;
  label?: ReactNode;
  color?: string;
  hidden?: boolean;
  directed?: boolean;
  // Dynamic labels (for i18n for example)
  labels?: Labels;
}> = ({ label, color, source, target, hidden, directed, labels = {} }) => {
  return (
    <div className="edge">
      <Node {...source} labels={labels} />
      <div className="body">
        <div className="render">
          <span className={`${hidden ? "dotted" : "dash"}`} style={{ borderColor: color || "#000" }} />{" "}
          {directed && <span className="arrow" style={{ borderTopColor: color || "#000" }} />}
        </div>
        <span className={`label ${hidden ? "text-muted" : ""} ${!label ? "fst-italic" : ""}`}>
          {label || labels["no_label"] || "No label"}
        </span>
      </div>
      <Node {...target} labels={labels} />
    </div>
  );
};

export const EdgeById: FC<{ id: string; labels?: Labels }> = ({ id, labels }) => {
  const sigma = useSigma();

  const edgeProps = useMemo(() => {
    const attrs = sigma.getGraph().getEdgeAttributes(id);
    const nodeReducer = sigma.getSetting("nodeReducer");
    const edgeReducer = sigma.getSetting("edgeReducer");

    const sourceAttrs = sigma.getGraph().getNodeAttributes(sigma.getGraph().source(id));
    const targetAttrs = sigma.getGraph().getNodeAttributes(sigma.getGraph().target(id));

    return {
      color: sigma.getSetting("defaultEdgeColor"),
      directed: sigma.getGraph().isDirected(id),
      ...attrs,
      ...(edgeReducer ? edgeReducer(id, attrs) : {}),
      source: {
        color: sigma.getSetting("defaultNodeColor"),
        ...sourceAttrs,
        ...(nodeReducer ? nodeReducer(id, sourceAttrs) : {}),
      },
      target: {
        color: sigma.getSetting("defaultNodeColor"),
        ...targetAttrs,
        ...(nodeReducer ? nodeReducer(id, targetAttrs) : {}),
      },
    };
  }, [sigma, id]);
  return <Edge {...edgeProps} labels={labels} />;
};
