import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rbnlffl/rollup-plugin-eslint";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_layout-force.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_layout-force.umd.min.js",
      format: "umd",
      name: "@react-sigma/layout-force",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    eslint({ filterExclude: "./src/assets/**" }),
    typescript({ tsconfig: "./tsconfig.json", outputToFilesystem: true }),
    terser(),
  ],
  external: [
    "sigma",
    "graphology",
    "lodash",
    "react",
    "react-dom",
    "@react-sigma/layout-core",
    "graphology-layout-force",
    "graphology-layout-force/worker",
  ],
};
