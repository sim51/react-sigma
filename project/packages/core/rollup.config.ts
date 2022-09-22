import { terser } from "rollup-plugin-terser";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import css from "rollup-plugin-import-css";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rbnlffl/rollup-plugin-eslint";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_core.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_core.umd.min.js",
      format: "umd",
      name: "@react-sigma/core",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    css({ output: "react-sigma.min.css", minify: true }),
    url(),
    svgr({ icon: true }),
    eslint({ filterExclude: "./src/assets/**" }),
    typescript({ tsconfig: "./tsconfig.json", outputToFilesystem: true }),
    terser(),
  ],
  external: ["sigma", "graphology", "lodash", "react", "react-dom"],
};
