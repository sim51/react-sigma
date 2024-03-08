import type { Meta, StoryObj } from "@storybook/react";

import { MultiDirectedGraph } from "./MultiDirectedGraph";
import source from "./MultiDirectedGraph?raw";

const meta: Meta<typeof MultiDirectedGraph> = {
  component: MultiDirectedGraph,
  id: "multi-directed",
  title: "Examples",
};

export default meta;
type Story = StoryObj<typeof MultiDirectedGraph>;

export const Default: Story = {
  name: "Instantiate a MultiDirectedGraph on SigmaContainer",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
