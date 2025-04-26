import { BaseStylesProps } from '../../lib/types';
type Size = 'medium' | 'small';
type Props = {
    size?: Size;
    asChild?: boolean;
} & BaseStylesProps & React.ComponentProps<'button'>;
export declare const MiniButton: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
