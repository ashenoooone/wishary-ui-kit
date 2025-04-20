import type { Meta, StoryObj } from '@storybook/react';
import { HSpacing } from './index';
import { SPACING_CONTROLS } from '@/lib/storybook-arg-types';
const meta = {
  component: HSpacing,
  title: 'HSpacing',
  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof HSpacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: '10',
  },
  argTypes: {
    size: SPACING_CONTROLS,
  },
  render: args => (
    <div className="flex mih-h-12">
      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        Before
      </span>

      <HSpacing
        {...args}
        className="bg-brand-secondary-2-300/20 border-2 border-brand-secondary-2-300 transition-all rounded min-h-12"
      />

      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        After
      </span>
    </div>
  ),
};
