import { BaseStylesProps } from '../types';
import { convertAlign } from './align';
import { convertMargins } from './margins';
import { convertPaddings } from './paddings';

export const convertBaseProps = (props: Partial<BaseStylesProps>) => {
  const classes = [];
  classes.push(convertPaddings(props));
  classes.push(convertMargins(props));
  classes.push(convertAlign(props));
  classes.push(props.className);
  return classes.join(' ').trim();
};
