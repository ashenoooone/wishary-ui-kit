import type { Meta, StoryObj } from '@storybook/react';
import { PhotoUploader } from './index';

const meta = {
  component: PhotoUploader,
  title: 'PhotoUploader',
  tags: ['autodocs'],
} satisfies Meta<typeof PhotoUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5,
  },
};

export const Error: Story = {
  render: args => {
    return <PhotoUploader {...args} />;
  },
  args: {
    maxFiles: 8,
    maxSizeMb: 5,
    error: 'файл не может весить более 5 мб',
  },
};
