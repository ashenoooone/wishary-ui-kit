import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { Slot } from '@/lib/slot';
import { BaseStylesProps } from '@/lib/types';

type Props = { asChild?: boolean } & BaseStylesProps & React.ComponentProps<'button'>;

export const Chips = (props: Props) => {
  const { asChild, ...rest } = props;

  const baseStyles = convertBaseProps(rest);

  const Component = asChild ? Slot : 'button';

  const interactionStyles =
    'hover:bg-base-500 hover:text-base-100 hover:border-transparent active:text-base-100 active:bg-base-900 disabled:bg-base-100 disabled:text-base-300';

  return (
    <Component
      {...rest}
      className={cn(
        'cursor-pointer rounded-size-full bg-base-200 transition-all',
        'px-chips-horizontal pt-chips-vertical-balance pb-chips-vertical',
        'text-caption-m-1',
        interactionStyles,
        baseStyles,
      )}
    />
  );
};
