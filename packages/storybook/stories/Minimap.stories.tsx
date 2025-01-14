import type { Meta, StoryObj } from '@storybook/react';

import { MinimapDemo } from './Minimap';
import source from './Minimap?raw';

const meta: Meta<typeof MinimapDemo> = {
  component: MinimapDemo,
  id: 'minimap',
  title: 'Minimap',
};

export default meta;
type Story = StoryObj<typeof MinimapDemo>;

export const Default: Story = {
  name: 'Sigma Minimap',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
