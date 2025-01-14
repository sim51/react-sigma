import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from './Demo';
import source from './Demo?raw';

const meta: Meta<typeof Demo> = {
  component: Demo,
  id: 'demo',
  title: 'Demos',
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  name: 'Sigma demo',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
