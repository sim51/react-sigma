import type { Meta, StoryObj } from '@storybook/react';

import { LoadGraphWithHook } from './LoadGraphWithHook';
import source from './LoadGraphWithHook?raw';

const meta: Meta<typeof LoadGraphWithHook> = {
  component: LoadGraphWithHook,
  id: 'load-graph-hook',
  title: 'Graph load',
};

export default meta;
type Story = StoryObj<typeof LoadGraphWithHook>;

export const Default: Story = {
  name: 'Load a graph using the `loadGraph` hook',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
