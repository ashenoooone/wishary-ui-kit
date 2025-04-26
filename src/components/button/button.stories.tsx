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
    size: 'medium',
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Click me',
    disabled: true,
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
    size: 'medium',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
    size: 'medium',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    variant: 'ghost',
    size: 'medium',
  },
};

// TODO: add stories with icons
