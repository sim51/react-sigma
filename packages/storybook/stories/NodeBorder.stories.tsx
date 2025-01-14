import type { Meta, StoryObj } from '@storybook/react';

import { NodeBorder } from './NodeBorder';
import source from './NodeBorder?raw';

const meta: Meta<typeof NodeBorder> = {
  component: NodeBorder,
  id: 'node-border',
  title: 'Sigma programs',
};

export default meta;
type Story = StoryObj<typeof NodeBorder>;

export const Default: Story = {
  name: 'Node with borders',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
