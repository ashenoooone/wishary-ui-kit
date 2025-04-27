import type { Meta, StoryObj } from '@storybook/react';
import { SearchIcon } from './search';
import { SettingsIcon } from './settings';
import { TrashIcon } from './trash';
import { CloseFillIcon } from './close-fill';
import { QuestionLineIcon } from './question-line';
import { BlingFillIcon } from './bling-fill';
import { ShareIcon } from './share';
import { IconProps } from './config';
import { ChevronIcon } from './chevron';
import { PlusIcon } from './plus';
import { ArrowIcon } from './arrow';
const meta = {
  title: 'Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

interface IconStoryProps extends IconProps {
  className?: string;
}

type IconStory = StoryObj<{
  args: IconStoryProps;
}>;

const IconTemplate = (Icon: React.ComponentType<IconProps>) => ({
  render: (args: IconStoryProps) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Icon {...args} size={16} />
        <span>16px</span>
      </div>
      <div className="flex items-center gap-4">
        <Icon {...args} size={24} />
        <span>24px</span>
      </div>
      <div className="flex items-center gap-4">
        <Icon {...args} size={32} />
        <span>32px</span>
      </div>
      <div className="flex items-center gap-4">
        <Icon {...args} size={48} />
        <span>48px</span>
      </div>
    </div>
  ),
});

export const Search: IconStory = {
  ...IconTemplate(SearchIcon),
  args: {
    className: 'text-primary',
  },
};

export const Settings: IconStory = {
  ...IconTemplate(SettingsIcon),
  args: {
    className: 'text-primary',
  },
};

export const Trash: IconStory = {
  ...IconTemplate(TrashIcon),
  args: {
    className: 'text-primary',
  },
};

export const CloseFill: IconStory = {
  ...IconTemplate(CloseFillIcon),
  args: {
    className: 'text-primary',
  },
};

export const QuestionLine: IconStory = {
  ...IconTemplate(QuestionLineIcon),
  args: {
    className: 'text-primary',
  },
};

export const BlingFill: IconStory = {
  ...IconTemplate(BlingFillIcon),
  args: {
    className: 'text-primary',
  },
};

export const Share: IconStory = {
  ...IconTemplate(ShareIcon),
  args: {
    className: 'text-primary',
  },
};

export const Chevron: IconStory = {
  ...IconTemplate(ChevronIcon),
  args: {
    className: 'text-primary',
  },
};

export const Plus: IconStory = {
  ...IconTemplate(PlusIcon),
  args: {
    className: 'text-primary',
  },
};

export const Arrow: IconStory = {
  ...IconTemplate(ArrowIcon),
  args: {
    className: 'text-primary',
  },
};
