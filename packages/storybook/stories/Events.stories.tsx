import type { Meta, StoryObj } from '@storybook/react';

import { Events } from './Events';
import source from './Events?raw';

const meta: Meta<typeof Events> = {
  component: Events,
  id: 'events',
  title: 'Examples',
};

export default meta;
type Story = StoryObj<typeof Events>;

export const Default: Story = {
  name: 'Open the js console and see all the tracked events',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
