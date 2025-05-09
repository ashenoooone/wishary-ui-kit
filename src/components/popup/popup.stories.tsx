import type { Meta, StoryObj } from '@storybook/react';
import {
  Popup,
  PopupTitle,
  PopupDescription,
  PopupContent,
  PopupPortal,
  PopupFooter,
} from './index';
import { Button } from '../button';

const meta = {
  component: Popup,
  title: 'Popup',
  tags: ['autodocs'],
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Popup defaultOpen>
        <PopupPortal>
          <PopupContent>
            <PopupTitle>Уверены что хотите удалить список «День рождение»?</PopupTitle>
            <PopupDescription>Уверены что хотите удалить список «День рождение»?</PopupDescription>
            <PopupFooter>
              <Button className="w-full" variant="ghost">
                Да
              </Button>
              <Button className="w-full" variant="secondary">
                Нет
              </Button>
            </PopupFooter>
          </PopupContent>
        </PopupPortal>
      </Popup>
    );
  },
};
