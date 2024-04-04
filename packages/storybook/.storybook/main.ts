import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx", "../../**/src/**/*.mdx", "../../**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react-vite",
  typescript: {
    check: true,
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  logLevel: "debug",
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        preserveSymlinks: false,
      },
    });
  },
};
export default config;
