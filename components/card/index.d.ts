import { BaseStylesProps } from '../../lib/types';
import { FlexProps } from '../flex';
import { ReactNode } from '../../../node_modules/react';
type CardProps = {
    children?: React.ReactNode;
} & BaseStylesProps & FlexProps;
export declare const Card: {
    ({ children, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ children, ...props }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, ...props }: FooterProps) => import("react/jsx-runtime").JSX.Element;
    Image: (props: ImageProps) => import("react/jsx-runtime").JSX.Element;
};
type CardHeaderProps = {
    children?: React.ReactNode;
} & BaseStylesProps & FlexProps;
export declare const CardHeader: ({ children, ...props }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
type FooterProps = {
    children?: React.ReactNode;
} & BaseStylesProps & FlexProps;
export declare const CardFooter: ({ children, ...props }: FooterProps) => import("react/jsx-runtime").JSX.Element;
type ImageProps = ({
    as?: ReactNode;
    children?: undefined;
} | ({
    as?: undefined;
    children?: undefined;
} & React.ComponentProps<'img'>) | ({
    as?: undefined;
    children?: ReactNode;
    containerProps?: FlexProps;
} & React.ComponentProps<'img'>)) & BaseStylesProps;
export declare const CardImage: (props: ImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
