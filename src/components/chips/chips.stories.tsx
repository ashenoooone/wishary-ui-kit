import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from './index';

const meta = {
  component: Chips,
  title: 'Chips',
  tags: ['autodocs'],
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '🎂 День рождениe',
  },
};
