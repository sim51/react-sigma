import svgr from "@svgr/rollup";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import eslint from "@rollup/plugin-eslint";
import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_layout-core.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_layout-core.umd.min.js",
      format: "umd",
      name: "@react-sigma/layout-core",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    url(),
    svgr({ icon: true }),
    eslint({ exclude: "./src/assets/**" }),
    typescript({ tsconfig: "./tsconfig.json", outputToFilesystem: true }),
    terser(),
  ],
  external: ["sigma", "graphology", "react", "react-dom", "@react-sigma/core"],
};
