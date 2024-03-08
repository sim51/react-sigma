import type { Meta, StoryObj } from "@storybook/react";

import { Multiple } from "./Multiple";
import source from "./Multiple?raw";

const meta: Meta<typeof Multiple> = {
  component: Multiple,
  id: "multi",
  title: "Examples",
};

export default meta;
type Story = StoryObj<typeof Multiple>;

export const Default: Story = {
  name: "Display multiple independant graph on the same page",
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
