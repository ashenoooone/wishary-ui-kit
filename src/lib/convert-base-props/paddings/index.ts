import { BaseStylesProps, Spacing } from '@/lib/types';
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
