import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";
import svgr from "@svgr/rollup";
import css from "rollup-plugin-import-css";
import url from "@rollup/plugin-url";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_graph-search.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_graph-search.umd.min.js",
      format: "umd",
      name: "@react-sigma/graph-search",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    css({ output: "style.css", minify: true }),
    url(),
    svgr({ icon: true }),
    eslint({ exclude: "./src/assets/**" }),
    typescript({ tsconfig: "./tsconfig.json", outputToFilesystem: true }),
    terser(),
  ],
  external: [
    "sigma",
    "minisearch",
    "graphology",
    "react",
    "react-dom",
    "react-select",
    "react-select/async",
    "@react-sigma/core"
  ],
};

