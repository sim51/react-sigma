import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";
import svgr from "@svgr/rollup";
import css from "rollup-plugin-import-css";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_core.esm.min.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_core.umd.min.js",
      format: "umd",
      name: "@react-sigma/core",
      sourcemap: true,
    },
  ],
  plugins: [
    css({ output: "react-sigma.min.css", minify: true }),
    url(),
    svgr({ icon: true }),
    eslint({ exclude: "./src/assets/**" }),
    typescript({ tsconfig: "./tsconfig.json", outputToFilesystem: true }),
    terser(),
  ],
  external: ["sigma", "graphology", "react", "react-dom"],
};

