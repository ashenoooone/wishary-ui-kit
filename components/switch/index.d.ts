import { BaseStylesProps } from '../../lib/types';
import { ReactNode } from '../../../node_modules/react';
type Props<T extends string> = {
    title?: ReactNode;
    helpText?: ReactNode;
    value?: T;
    onChange?: (value: T) => void;
    children?: ReactNode;
} & BaseStylesProps;
export declare const Switch: {
    <T extends string>(props: Props<T>): import("react/jsx-runtime").JSX.Element;
    Button: <T extends string>(props: {
        value?: T | undefined;
        asChild?: boolean;
    } & BaseStylesProps & import('../../../node_modules/react').ClassAttributes<HTMLButtonElement> & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
};
export {};
