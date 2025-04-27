import { BaseStylesProps } from '@/lib/types';
import { Flex, FlexProps } from '../flex';
import { convertBaseProps } from '@/lib/convert-base-props';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import { Slot } from '@/lib/slot';

type CardProps = {
  children?: React.ReactNode;
} & BaseStylesProps &
  FlexProps;

export const Card = ({ children, ...props }: CardProps) => {
  const baseStyles = convertBaseProps(props);

  return (
    <Flex {...props} className={cn('max-w-[178px] w-full', baseStyles)} direction="column">
      {children}
    </Flex>
  );
};

type CardHeaderProps = {
  children?: React.ReactNode;
} & BaseStylesProps &
  FlexProps;

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  const baseStyles = convertBaseProps(props);

  return (
    <Flex p="2" {...props} className={cn('text-caption-l-1 text-base-700', baseStyles)}>
      {children}
    </Flex>
  );
};

type FooterProps = {
  children?: React.ReactNode;
} & BaseStylesProps &
  FlexProps;

export const CardFooter = ({ children, ...props }: FooterProps) => {
  const baseStyles = convertBaseProps(props);

  return (
    <Flex p="2" direction="column" {...props} className={cn('text-footnote-m w-full', baseStyles)}>
      {children}
    </Flex>
  );
};

type ImageProps = (
  | {
      as?: ReactNode;
      children?: undefined;
    }
  | ({
      as?: undefined;
      children?: undefined;
    } & React.ComponentProps<'img'>)
  | ({
      as?: undefined;
      children?: ReactNode;
      containerProps?: FlexProps;
    } & React.ComponentProps<'img'>)
) &
  BaseStylesProps;

export const CardImage = (props: ImageProps) => {
  const { as, children, ...rest } = props;

  const baseStyles = convertBaseProps(rest);

  const classes = 'rounded-size-m w-full aspect-[3/4] object-cover';

  if (as) {
    return <Slot className={cn(classes, baseStyles)}>{as}</Slot>;
  }

  if (children) {
    return (
      <Flex {...props.containerProps}>
        <img {...rest} className={cn(classes, baseStyles)} />;{children}
      </Flex>
    );
  }
  return <img {...rest} className={cn(classes, baseStyles)} />;
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Image = CardImage;
