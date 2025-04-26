import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';
import { useState } from 'react';

const meta = {
  component: Switch,
  title: 'Switch',
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = (
  <>
    <Switch.Button value="all">Все</Switch.Button>
    <Switch.Button value="active">Активные</Switch.Button>
    <Switch.Button value="disabled">Выключенные</Switch.Button>
  </>
);

export const Default: Story = {
  args: {
    title: 'Доступность списка',
    helpText: 'Help text',
    children,
    value: 'active',
  },
  render: args => {
    // TODO: fix this
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value);

    return <Switch {...args} value={value} onChange={setValue} />;
  },
};
