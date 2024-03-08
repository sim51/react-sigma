import type { Meta, StoryObj } from "@storybook/react";

import { UpdatedGraphReference } from "./UpdateGraphReference";
import source from "./UpdateGraphReference?raw";

const meta: Meta<typeof UpdatedGraphReference> = {
  component: UpdatedGraphReference,
  id: "graph-update",
  title: "Examples",
};

export default meta;
type Story = StoryObj<typeof UpdatedGraphReference>;

export const Default: Story = {
  name: "Update graph instance during lifecycle of react-sigma",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
