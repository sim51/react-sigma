import React, { FC, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface CodePreviewProps {
  mode: "preview" | "code";
  title?: string;
  code: string;
  component: () => JSX.Element;
}
export const CodePreview: FC<CodePreviewProps> = ({ code, title, component, mode = "code" }) => {
  const [currentMode, setMode] = useState<string>(mode);
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
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
            {currentMode === "preview" && component()}
            {currentMode === "code" && <CodeBlock language="jsx">{code}</CodeBlock>}
          </div>
        </div>
      )}
    </BrowserOnly>
  );
};

export default CodePreview;
