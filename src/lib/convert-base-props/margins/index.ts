import { BaseStylesProps } from '../../types';
import { Spacing } from '../../types';
import { marginClassMap } from './m-mapper';

export const convertMargins = (props: Partial<BaseStylesProps>) => {
  const classes = [];
  for (const key in marginClassMap) {
    const value = props[key as keyof typeof marginClassMap] as Spacing | undefined;
    if (value) {
      const cls = marginClassMap[key as keyof typeof marginClassMap]?.[value];
      if (cls) classes.push(cls);
    }
  }
  return classes.join(' ');
};
