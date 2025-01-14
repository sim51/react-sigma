import type { Meta, StoryObj } from '@storybook/react';

import { External } from './External';
import source from './External?raw';

const meta: Meta<typeof External> = {
  component: External,
  id: 'external',
  title: 'Examples',
};

export default meta;
type Story = StoryObj<typeof External>;

export const Default: Story = {
  name: 'Use sigma ref to control it outside the SigmaContainer',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
