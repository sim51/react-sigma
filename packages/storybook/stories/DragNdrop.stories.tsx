import type { Meta, StoryObj } from "@storybook/react";

import { DragNdrop } from "./DragNdrop";
import source from "./DragNdrop?raw";

const meta: Meta<typeof DragNdrop> = {
  component: DragNdrop,
  id: "drag-n-drop",
  title: "Examples",
};

export default meta;
type Story = StoryObj<typeof DragNdrop>;

export const Default: Story = {
  name: "Drag'n'drop nodes on the graph",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
