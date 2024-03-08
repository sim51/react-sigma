import type { Meta, StoryObj } from "@storybook/react";

import { LayoutFA2Control } from "./LayoutFA2Control";
import source from "./LayoutFA2Control?raw";

const meta: Meta<typeof LayoutFA2Control> = {
  component: LayoutFA2Control,
  id: "layout-fa2-control",
  title: "Layouts",
};

export default meta;
type Story = StoryObj<typeof LayoutFA2Control>;

export const Default: Story = {
  name: "Run a FA2 layout with the provided controller",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
