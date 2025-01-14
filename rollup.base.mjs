import eslint from '@rollup/plugin-eslint';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import css from 'rollup-plugin-import-css';

/** @type {import("rollup").RollupOptions} */
function getRollupConfig(packageName) {
  return {
    input: 'src/index.ts',
    output: [
      {
        file: `lib/react-sigma_${packageName}.esm.min.js`,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: `lib/react-sigma_${packageName}.umd.min.js`,
        format: 'umd',
        name: `@react-sigma/${packageName}`,
        sourcemap: true,
      },
    ],
    plugins: [
      css({ output: 'style.css', minify: true }),
      url(),
      svgr({ icon: true }),
      eslint({ exclude: './src/assets/**' }),
      typescript({ tsconfig: './tsconfig.json', outputToFilesystem: true }),
      terser(),
    ],
    external: [
      
      "graphology",
      "graphology-layout/circlepack",
      "graphology-layout-force",
      "graphology-layout-force/worker",
      "graphology-layout-forceatlas2",
      "graphology-layout-forceatlas2/worker",
      "graphology-layout-noverlap",
      "graphology-layout-noverlap/worker",
      "graphology-layout/random",
      "minisearch",
      "react",
      "react-dom",
      "react-select",
      "react-select/async",
      "sigma"
    ],
  };
}

export default getRollupConfig;
