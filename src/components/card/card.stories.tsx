import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { Button, Typography } from '../index';
import cardImage from '/card-example.jpg';
import { Flex } from '../flex';

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Flex gap="4" className="bg-base-200 rounded-size-m" p="10">
        <Card>
          <Card.Image src={cardImage} alt="Китайская традиционная доска го" />
          <Card.Header>
            <Typography lineClamp={2}>
              Традиционная китайская деревянная доска для игры в го с комплектом черных и белых
              камней в бамбуковых контейнерах с крышками для профессиональных и начинающих игроков
              размер 19 на 19 увеличенная версия для соревнований
            </Typography>
          </Card.Header>
          <Card.Footer gap="4" align="stretch">
            <Typography>3 763 ₽</Typography>
            <Button size="small" variant="secondary">
              Забронировать
            </Button>
          </Card.Footer>
        </Card>
      </Flex>
    );
  },
};

export const WithDeleteButton: Story = {
  render: () => {
    return (
      <Flex gap="4" className="bg-base-200 rounded-size-m" p="10">
        <Card>
          {/* TODO: delete icon in img */}
          <Card.Image src={cardImage} alt="Китайская традиционная доска го" />
          <Card.Header>
            <Typography lineClamp={2}>
              Традиционная китайская деревянная доска для игры в го с комплектом черных и белых
              камней в бамбуковых контейнерах с крышками для профессиональных и начинающих игроков
              размер 19 на 19 увеличенная версия для соревнований
            </Typography>
          </Card.Header>
          <Card.Footer gap="4" align="stretch">
            <Typography>3 763 ₽</Typography>
            <Button size="small" variant="secondary">
              Забронировать
            </Button>
          </Card.Footer>
        </Card>
      </Flex>
    );
  },
};
