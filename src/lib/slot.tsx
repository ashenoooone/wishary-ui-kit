import React from 'react';

type SlotProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Slot = (props: SlotProps) => {
  const { children, ...rest } = props;

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      // @ts-ignore
      ...children.props,
      ...rest,
    });
  }

  if (React.Children.count(children) > 1) {
    throw new Error('Slot can only have one child');
  }

  throw new Error('Slot must be a valid React element');
};
