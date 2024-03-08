import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_layout-circular.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_layout-circular.umd.min.js",
      format: "umd",
      name: "@react-sigma/layout-circular",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    eslint({ exclude: "./src/assets/**" }),
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
    "graphology-layout/circular",
  ],
};

