import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './index';
import { Typography } from '../typography';
import { SPACING_CONTROLS } from '@/lib/storybook-arg-types';

const meta = {
  component: Flex,
  title: 'Flex',
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const argTypes = {
  gap: SPACING_CONTROLS,
};

export const Default: Story = {
  argTypes,
  args: {
    children: (
      <>
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
      </>
    ),
  },
};

export const DefaultWithGap: Story = {
  argTypes,
  args: {
    ...Default.args,
    gap: '4',
  },
};
