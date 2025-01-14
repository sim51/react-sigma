import type { Meta, StoryObj } from '@storybook/react';

import { MultiDirectedGraph } from './MultiDirectedGraph';
import source from './MultiDirectedGraph?raw';

const meta: Meta<typeof MultiDirectedGraph> = {
  component: MultiDirectedGraph,
  id: 'edge-curve',
  title: 'Sigma programs',
};

export default meta;
type Story = StoryObj<typeof MultiDirectedGraph>;

export const Default: Story = {
  name: 'Edge curved with arrows',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
