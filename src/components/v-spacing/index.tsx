import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { BaseStylesProps, Spacing } from '@/lib/types';

type Props = {
  size?: Spacing;
} & BaseStylesProps;

export const VSpacing = (props: Props) => {
  const { size = '1', ...baseProps } = props;
  const classes = convertBaseProps(baseProps);

  return (
    <div
      className={cn(
        'w-full',
        {
          'h-space-1': size === '1',
          'h-space-2': size === '2',
          'h-space-3': size === '3',
          'h-space-4': size === '4',
          'h-space-5': size === '5',
          'h-space-6': size === '6',
          'h-space-7': size === '7',
          'h-space-8': size === '8',
          'h-space-9': size === '9',
          'h-space-10': size === '10',
          'h-space-11': size === '11',
          'h-space-12': size === '12',
          'h-space-13': size === '13',
          'h-space-14': size === '14',
          'h-space-15': size === '15',
          'h-space-16': size === '16',
          'h-space-17': size === '17',
          'h-space-18': size === '18',
          'h-space-19': size === '19',
          'h-space-20': size === '20',
          'h-space-21': size === '21',
          'h-space-22': size === '22',
          'h-space-23': size === '23',
          'h-space-24': size === '24',
          'h-space-25': size === '25',
          'h-space-26': size === '26',
          'h-space-27': size === '27',
          'h-space-28': size === '28',
          'h-space-29': size === '29',
          'h-space-30': size === '30',
          'h-space-31': size === '31',
          'h-space-32': size === '32',
        },
        classes,
      )}
    />
  );
};
