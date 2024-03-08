import type { Meta, StoryObj } from "@storybook/react";

import { LoadGraphWithProp } from "./LoadGraphWithProp";
import source from "./LoadGraphWithProp?raw";

const meta: Meta<typeof LoadGraphWithProp> = {
  component: LoadGraphWithProp,
  id: "load-graph-prop",
  title: "Graph load",
};

export default meta;
type Story = StoryObj<typeof LoadGraphWithProp>;

export const Default: Story = {
  name: "Load a graph using the `graph` property on the `SigmaContainer` component",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
