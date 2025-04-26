import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { gapClassMap } from '@/lib/convert-base-props/gap';
import { BaseStylesProps, Spacing } from '@/lib/types';

type Direction = 'row' | 'column';
type Align = 'start' | 'center' | 'end';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
type Gap = Spacing | '0';

type Props = {
  children?: React.ReactNode;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
} & BaseStylesProps;

export const Flex = (props: Props) => {
  const {
    children,
    direction = 'row',
    align = 'start',
    justify = 'start',
    gap = '0',
    ...rest
  } = props;

  const baseStyles = convertBaseProps(rest);
  const gapClass = gap === '0' ? '' : gapClassMap[gap];

  return (
    <div
      className={cn(
        'flex',
        baseStyles,
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'justify-start': justify === 'start',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
        },
        gapClass,
      )}
    >
      {children}
    </div>
  );
};
