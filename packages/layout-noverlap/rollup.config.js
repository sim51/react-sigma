import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/react-sigma_layout-noverlap.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/react-sigma_layout-noverlap.umd.min.js",
      format: "umd",
      name: "@react-sigma/layout-noverlap",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [eslint({ exclude: "./src/assets/**" }), typescript({ outputToFilesystem: true }), terser()],
  external: [
    "sigma",
    "graphology",
    "react",
    "react-dom",
    "@react-sigma/layout-core",
    "graphology-layout-noverlap",
    "graphology-layout-noverlap/worker",
  ],
};
