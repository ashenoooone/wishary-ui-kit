import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { Slot } from '@/lib/slot';
import { BaseStylesProps } from '@/lib/types';
import { useSwitchContext } from './context';

type Props<T extends string> = {
  value?: T;
  asChild?: boolean;
} & BaseStylesProps &
  React.ComponentProps<'button'>;

export const SwitchButton = <T extends string>(props: Props<T>) => {
  const { value, asChild, children, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  const baseStyles = convertBaseProps(rest);

  const { value: contextValue, onChange: contextOnChange } = useSwitchContext<T>();

  const checked = contextValue === value;

  const handleClick = () => {
    if (value) contextOnChange?.(value);
  };

  return (
    <Component
      {...rest}
      onClick={handleClick}
      className={cn(
        'px-switch-button-horizontal py-switch-button-vertical',
        'rounded-size-s cursor-pointer',
        { 'bg-base-900 text-base-100 transition-all': checked },
        baseStyles,
      )}
    >
      {children}
    </Component>
  );
};
