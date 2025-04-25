import { cn } from '@/lib/cn';
import { Slot } from '@/lib/slot';
import { BaseStylesProps } from '@/lib/types';

type BaseButtonProps = React.ComponentProps<'button'> & BaseStylesProps;

type Size = 'small' | 'medium' | 'large';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  asChild?: boolean;
  size?: Size;
  variant?: Variant;
} & BaseButtonProps;

export const Button = (props: ButtonProps) => {
  const { asChild, size = 'medium', variant = 'primary', ...rest } = props;

  const Component = asChild ? Slot : 'button';

  const variantStyles = {
    primary: 'bg-brand-primary-500 text-brand-primary-100',
    secondary: 'bg-base-900 text-base-100',
    ghost: 'text-base-900 border border-base-300',
  }[variant];

  const sizeStyles = {
    small: 'rounded-s',
    medium: 'rounded-m',
    large: 'rounded-l',
  }[size];

  return <Component {...rest} className={cn(variantStyles, sizeStyles, 'px-space-2')} />;
};
