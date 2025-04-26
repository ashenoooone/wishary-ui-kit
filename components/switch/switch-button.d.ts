import { BaseStylesProps } from '../../lib/types';
type Props<T extends string> = {
    value?: T;
    asChild?: boolean;
} & BaseStylesProps & React.ComponentProps<'button'>;
export declare const SwitchButton: <T extends string>(props: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
