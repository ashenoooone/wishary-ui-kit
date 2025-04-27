import { BaseStylesProps } from '@/lib/types';
import { ComponentProps } from 'react';

export type IconProps = BaseStylesProps &
  ComponentProps<'svg'> & {
    size?: number;
  };

export const DEFAULT_SIZE = 24;
