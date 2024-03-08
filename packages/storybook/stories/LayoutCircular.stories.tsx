import type { Meta, StoryObj } from "@storybook/react";

import { LayoutCircular } from "./LayoutCircular";
import source from "./LayoutCircular?raw";

const meta: Meta<typeof LayoutCircular> = {
  component: LayoutCircular,
  id: "layout-circular",
  title: "Layouts",
};

export default meta;
type Story = StoryObj<typeof LayoutCircular>;

export const Default: Story = {
  name: "Apply a circular layout",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
