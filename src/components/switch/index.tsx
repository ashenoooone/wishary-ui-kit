import { convertBaseProps } from '@/lib/convert-base-props';
import { BaseStylesProps } from '@/lib/types';
import { Flex } from '../flex';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import { Typography } from '../typography';
import { SwitchProvider } from './context';
import { SwitchButton } from './switch-button';

type Props<T extends string> = {
  title?: ReactNode;
  helpText?: ReactNode;
  value?: T;
  onChange?: (value: T) => void;
  children?: ReactNode;
} & BaseStylesProps;

export const Switch = <T extends string>(props: Props<T>) => {
  const { title, helpText, children, value, onChange, ...rest } = props;

  const baseStyles = convertBaseProps(rest);

  const titleElement =
    typeof title === 'string' ? <Typography variant="subheadline-m">{title}</Typography> : title;

  const helpTextElement =
    typeof helpText === 'string' ? (
      <Typography variant="caption-s-1" color="muted">
        {helpText}
      </Typography>
    ) : (
      helpText
    );

  return (
    <SwitchProvider value={value} onChange={onChange}>
      <Flex direction="column" gap="3">
        {titleElement}
        <Flex className={cn('p-space-2 bg-base-200 rounded-size-m', baseStyles)} gap="2">
          {children}
        </Flex>
        {helpTextElement}
      </Flex>
    </SwitchProvider>
  );
};

Switch.Button = SwitchButton;
