import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    checker({
      typescript: {
        buildMode: true,
      },
      eslint: {
        lintCommand: "eslint --ext .ts,.tsx,.js,.jsx src",
      },
    }),
  ],
  test: {
    root: ".",
    globals: true,
    exclude: ["e2e", "node_modules"],
  },
});
