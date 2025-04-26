import { BaseStylesProps } from '../../lib/types';
import { default as React } from '../../../node_modules/react';
type BaseButtonProps = React.ComponentProps<'button'> & BaseStylesProps;
type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary' | 'ghost';
type ButtonProps = {
    asChild?: boolean;
    size?: Size;
    variant?: Variant;
} & BaseButtonProps & React.ComponentProps<'button'>;
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
