import { BaseStylesProps, TextAlign } from '@/lib/types';
import { alignMapper } from './align-mapper';

export const convertAlign = (props: Partial<BaseStylesProps>) => {
  const value = props.textAlign as TextAlign | undefined;
  if (value) {
    return alignMapper[value];
  }
  return '';
};
