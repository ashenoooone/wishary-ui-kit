import { BaseStylesProps } from '../../lib/types';
type AsElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Color = 'default' | 'muted';
export type Variant = 'large-title-l' | 'large-title-m' | 'large-title-s' | 'title-l-1' | 'title-m-1' | 'title-s-1' | 'title-l-2' | 'title-m-2' | 'title-s-2' | 'title-l-3' | 'title-m-3' | 'title-s-3' | 'headline-l' | 'headline-m' | 'headline-s' | 'callout-l' | 'callout-m' | 'callout-s' | 'body-l' | 'body-m' | 'body-s' | 'subheadline-l' | 'subheadline-m' | 'subheadline-s' | 'footnote-l' | 'footnote-m' | 'footnote-s' | 'caption-l-1' | 'caption-m-1' | 'caption-s-1' | 'caption-l-2' | 'caption-m-2' | 'caption-s-2';
export type Props = {
    as?: AsElement;
    children: React.ReactNode;
    variant?: Variant;
    color?: Color;
} & BaseStylesProps;
export declare const Typography: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
