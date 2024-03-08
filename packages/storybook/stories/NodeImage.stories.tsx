import type { Meta, StoryObj } from "@storybook/react";

import { NodeImage } from "./NodeImage";
import source from "./NodeImage?raw";

const meta: Meta<typeof NodeImage> = {
  component: NodeImage,
  id: "node-image",
  title: "Sigma programs",
};

export default meta;
type Story = StoryObj<typeof NodeImage>;

export const Default: Story = {
  name: "Node with images",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
