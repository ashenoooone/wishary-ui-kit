import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { Slot } from '@/lib/slot';
import { BaseStylesProps } from '@/lib/types';

type Size = 'medium' | 'small';

type Props = {
  size?: Size;
  asChild?: boolean;
} & BaseStylesProps &
  React.ComponentProps<'button'>;

export const MiniButton = (props: Props) => {
  const { size = 'medium', children, asChild = false, ...rest } = props;
  const Component = asChild ? Slot : 'button';

  const baseStyles = convertBaseProps(rest);

  const sizeStyles = {
    medium: 'px-mini-button-m-horizontal py-mini-button-m-vertical',
    small: 'px-mini-button-s-horizontal py-mini-button-s-vertical',
  }[size];

  const defaultStyles = 'rounded-size-full bg-base-200 transition-all';
  const interactionStyles =
    'hover:bg-base-500 hover:text-base-100 hover:border-transparent active:text-base-100 active:bg-base-900 disabled:bg-base-100 disabled:text-base-300';

  return (
    <Component className={cn(defaultStyles, interactionStyles, sizeStyles, baseStyles)}>
      {children}
    </Component>
  );
};
