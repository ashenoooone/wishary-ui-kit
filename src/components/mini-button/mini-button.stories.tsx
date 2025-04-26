import type { Meta, StoryObj } from '@storybook/react';
import { MiniButton } from './index';

const meta = {
  component: MiniButton,
  title: 'MiniButton',
  tags: ['autodocs'],
} satisfies Meta<typeof MiniButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    children: 'mini',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'mini',
  },
};
