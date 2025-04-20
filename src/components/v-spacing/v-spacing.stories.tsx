import type { Meta, StoryObj } from '@storybook/react';
import { VSpacing } from './index';
import { SPACING_CONTROLS } from '@/lib/storybook-arg-types';

const meta = {
  component: VSpacing,
  title: 'VSpacing',
  tags: ['autodocs'],
} satisfies Meta<typeof VSpacing>;

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
    <div className="flex flex-col">
      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        Before
      </span>

      <VSpacing
        {...args}
        className="bg-brand-secondary-2-300/20 border-2 border-brand-secondary-2-300 transition-all rounded"
      />

      <span className="bg-slate-500 text-white text-sm px-2 py-1 rounded flex items-center">
        After
      </span>
    </div>
  ),
};
