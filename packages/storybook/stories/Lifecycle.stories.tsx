import type { Meta, StoryObj } from '@storybook/react';

import { Lifecycle } from './Lifecycle';
import source from './Lifecycle?raw';

const meta: Meta<typeof Lifecycle> = {
  component: Lifecycle,
  id: 'lifecycle',
  title: 'Examples',
};

export default meta;
type Story = StoryObj<typeof Lifecycle>;

export const Default: Story = {
  name: 'Testing lifecycle',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
