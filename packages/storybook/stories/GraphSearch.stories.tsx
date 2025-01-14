import type { Meta, StoryObj } from '@storybook/react';

import { GraphSearchDemo } from './GraphSearch';
import source from './GraphSearch?raw';

const meta: Meta<typeof GraphSearchDemo> = {
  component: GraphSearchDemo,
  id: 'graph-search',
  title: 'Graph Search',
};

export default meta;
type Story = StoryObj<typeof GraphSearchDemo>;

export const Default: Story = {
  name: 'Sigma - Graph search',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
