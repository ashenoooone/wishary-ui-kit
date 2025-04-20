import { BaseStylesProps, Spacing, TextAlign } from '../types';
import { alignMapper } from './align-mapper';
import { marginClassMap } from './m-mapper';
import { paddingClassMap } from './p-mappers';

export const convertPaddings = (props: Partial<BaseStylesProps>) => {
  const classes = [];
  for (const key in paddingClassMap) {
    const value = props[key as keyof typeof paddingClassMap] as Spacing | undefined;
    if (value) {
      const cls = paddingClassMap[key as keyof typeof paddingClassMap]?.[value];
      if (cls) classes.push(cls);
    }
  }
  return classes.join(' ');
};

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

export const convertAlign = (props: Partial<BaseStylesProps>) => {
  const value = props.textAlign as TextAlign | undefined;
  if (value) {
    return alignMapper[value];
  }
  return '';
};

export const convertBaseProps = (props: Partial<BaseStylesProps>) => {
  const classes = [];
  classes.push(convertPaddings(props));
  classes.push(convertMargins(props));
  classes.push(convertAlign(props));
  classes.push(props.className);
  return classes.join(' ').trim();
};
