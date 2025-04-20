import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    variant: 'ghost',
  },
};
