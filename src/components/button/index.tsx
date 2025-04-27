import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { Slot } from '@/lib/slot';
import { BaseStylesProps } from '@/lib/types';
import React from 'react';

type BaseButtonProps = React.ComponentProps<'button'> & BaseStylesProps;

type Size = 'small' | 'medium' | 'large';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  asChild?: boolean;
  size?: Size;
  variant?: Variant;
} & BaseButtonProps &
  React.ComponentProps<'button'>;

const isSvgElement = (element: React.ReactNode) => {
  if (!React.isValidElement(element)) return false;
  return element.type === 'svg';
};

export const Button = (props: ButtonProps) => {
  const { asChild, size = 'medium', variant = 'primary', children, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  const variantStyles = {
    primary: 'bg-brand-primary-500 text-brand-primary-100 shadow-button-primary',
    secondary: 'bg-base-900 text-base-100',
    ghost: 'text-base-900 border border-base-300',
  }[variant];

  const interactionStyles = {
    primary:
      'hover:bg-brand-primary-400 active:bg-brand-primary-600 disabled:text-base-300 disabled:bg-base-100',
    secondary:
      'hover:bg-base-500 active:text-base-700 active:bg-base-200 disabled:bg-base-100 disabled:text-base-300',
    ghost:
      'hover:bg-base-500 hover:text-base-100 hover:border-transparent active:text-base-700 active:bg-base-200 disabled:bg-base-100 disabled:text-base-300',
  }[variant];

  const sizeStyles = {
    small: 'text-caption-l-1 rounded-size-s px-button-s-horizontal py-button-s-vertical',
    medium: 'text-subheadline-l rounded-size-m px-button-m-horizontal py-button-m-vertical',
    large: 'text-subheadline-l rounded-size-l px-button-l-horizontal py-button-l-vertical',
  }[size];

  const baseStyles = convertBaseProps(rest);

  const childrenArray = React.Children.toArray(children);

  const hasOnlyIcon = childrenArray.length === 1 && isSvgElement(childrenArray[0]);
  const iconAtStart = childrenArray.length > 1 && isSvgElement(childrenArray[0]);
  const iconAtEnd =
    childrenArray.length > 1 && isSvgElement(childrenArray[childrenArray.length - 1]);

  const iconStyles = {
    'p-button-l-icon': hasOnlyIcon && size === 'large',
    'p-button-m-icon': hasOnlyIcon && size === 'medium',
    'p-button-s-icon': hasOnlyIcon && size === 'small',
    'pl-button-l-horizontal-icon': iconAtStart && size === 'large',
    'pl-button-m-horizontal-icon': iconAtStart && size === 'medium',
    'pl-button-s-horizontal-icon': iconAtStart && size === 'small',
    'pr-button-l-horizontal-icon': iconAtEnd && size === 'large',
    'pr-button-m-horizontal-icon': iconAtEnd && size === 'medium',
    'pr-button-s-horizontal-icon': iconAtEnd && size === 'small',
  };

  return (
    <Component
      {...rest}
      className={cn(
        'cursor-pointer transition-all disabled:pointer-events-none',
        variantStyles,
        sizeStyles,
        interactionStyles,
        baseStyles,
        iconStyles,
      )}
    >
      {children}
    </Component>
  );
};
