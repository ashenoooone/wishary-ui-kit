import { ArgTypes } from '@storybook/react';

type Control = ArgTypes[string];

export const SPACING_CONTROLS: Control = {
  control: {
    type: 'select',
  },
  options: Array.from({ length: 32 }, (_, i) => String(i + 1)),
};
