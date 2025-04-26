import { BaseStylesProps, Spacing } from '../../lib/types';
type Direction = 'row' | 'column';
type Align = 'start' | 'center' | 'end';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
type Gap = Spacing | '0';
type Props = {
    children?: React.ReactNode;
    direction?: Direction;
    align?: Align;
    justify?: Justify;
    gap?: Gap;
} & BaseStylesProps;
export declare const Flex: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
