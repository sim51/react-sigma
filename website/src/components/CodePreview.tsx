import React, { FC, useState, PropsWithChildren } from "react";
import CodeBlock from "@theme/CodeBlock";

export const CodePreview: FC<PropsWithChildren<{ code: string; title?: string; mode: "preview" | "code" }>> = ({
  code,
  title,
  children,
  mode = "code",
}) => {
  const [currentMode, setMode] = useState<string>(mode);
  return (
    <div className="code-preview">
      <div className="header">
        <div>{title && <h5>{title}</h5>}</div>
        <div className="switch">
          <button className="button" onClick={() => setMode("code")} disabled={currentMode === "code"}>
            Code
          </button>
          <button className="button" onClick={() => setMode("preview")} disabled={currentMode === "preview"}>
            Preview
          </button>
        </div>
      </div>
      <div className="content">
        {currentMode === "preview" && children}
        {currentMode === "code" && <CodeBlock language="jsx">{code}</CodeBlock>}
      </div>
    </div>
  );
};

export default CodePreview;
