import type { Meta, StoryObj } from '@storybook/react';

import { CustomRender } from './CustomRender';
import source from './CustomRender?raw';

const meta: Meta<typeof CustomRender> = {
  component: CustomRender,
  id: 'custom-renderer',
  title: 'Examples',
};

export default meta;
type Story = StoryObj<typeof CustomRender>;

export const Default: Story = {
  name: 'Make your own style by overring the native display and labels of controllers',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
