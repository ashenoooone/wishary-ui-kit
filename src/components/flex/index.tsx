import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { gapClassMap } from '@/lib/convert-base-props/gap';
import { BaseStylesProps, Spacing } from '@/lib/types';

type Direction = 'row' | 'column';
type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
type Gap = Spacing | '0';

export type FlexProps = {
  children?: React.ReactNode;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
} & BaseStylesProps;

export const Flex = (props: FlexProps) => {
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
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
          'items-start': align === 'start',
          'items-center': align === 'center',
          'items-end': align === 'end',
          'items-stretch': align === 'stretch',
          'justify-start': justify === 'start',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
        },
        gapClass,
        baseStyles,
      )}
    >
      {children}
    </div>
  );
};
