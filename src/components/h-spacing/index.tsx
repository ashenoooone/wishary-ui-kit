import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { BaseStylesProps, Spacing } from '@/lib/types';

type Props = {
  size?: Spacing;
} & BaseStylesProps;

export const HSpacing = (props: Props) => {
  const { size = '1', ...baseProps } = props;
  const classes = convertBaseProps(baseProps);

  return (
    <div
      className={cn(
        'h-full',
        {
          'w-space-1': size === '1',
          'w-space-2': size === '2',
          'w-space-3': size === '3',
          'w-space-4': size === '4',
          'w-space-5': size === '5',
          'w-space-6': size === '6',
          'w-space-7': size === '7',
          'w-space-8': size === '8',
          'w-space-9': size === '9',
          'w-space-10': size === '10',
          'w-space-11': size === '11',
          'w-space-12': size === '12',
          'w-space-13': size === '13',
          'w-space-14': size === '14',
          'w-space-15': size === '15',
          'w-space-16': size === '16',
          'w-space-17': size === '17',
          'w-space-18': size === '18',
          'w-space-19': size === '19',
          'w-space-20': size === '20',
          'w-space-21': size === '21',
          'w-space-22': size === '22',
          'w-space-23': size === '23',
          'w-space-24': size === '24',
          'w-space-25': size === '25',
          'w-space-26': size === '26',
          'w-space-27': size === '27',
          'w-space-28': size === '28',
          'w-space-29': size === '29',
          'w-space-30': size === '30',
          'w-space-31': size === '31',
          'w-space-32': size === '32',
        },
        classes,
      )}
    />
  );
};
