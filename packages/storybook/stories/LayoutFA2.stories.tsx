import type { Meta, StoryObj } from "@storybook/react";

import { LayoutFA2 } from "./LayoutFA2";
import source from "./LayoutFA2?raw";

const meta: Meta<typeof LayoutFA2> = {
  component: LayoutFA2,
  id: "layout-fa2-worker",
  title: "Layouts",
};

export default meta;
type Story = StoryObj<typeof LayoutFA2>;

export const Default: Story = {
  name: "Run a FA2 layout manually",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
