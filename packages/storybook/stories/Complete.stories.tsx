import type { Meta, StoryObj } from '@storybook/react';

import { Complete } from './Complete';
import source from './Complete?raw';

const meta: Meta<typeof Complete> = {
  component: Complete,
  id: 'complete',
  title: 'Demos',
};

export default meta;
type Story = StoryObj<typeof Complete>;

export const Default: Story = {
  name: 'A complete tour of the lib with all features',
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};
