import { BaseStylesProps, Spacing } from '../../lib/types';
type Direction = 'row' | 'column';
type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
type Gap = Spacing | '0';
export type FlexProps = {
    children?: React.ReactNode;
    direction?: Direction;
    align?: Align;
    justify?: Justify;
    gap?: Gap;
} & BaseStylesProps;
export declare const Flex: (props: FlexProps) => import("react/jsx-runtime").JSX.Element;
export {};
