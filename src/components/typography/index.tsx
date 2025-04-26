import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { BaseStylesProps } from '@/lib/types';

type AsElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Color = 'default' | 'muted';
export type Variant =
  // Large Title
  | 'large-title-l'
  | 'large-title-m'
  | 'large-title-s'

  // Title 1
  | 'title-l-1'
  | 'title-m-1'
  | 'title-s-1'

  // Title 2
  | 'title-l-2'
  | 'title-m-2'
  | 'title-s-2'

  // Title 3
  | 'title-l-3'
  | 'title-m-3'
  | 'title-s-3'

  // Headline
  | 'headline-l'
  | 'headline-m'
  | 'headline-s'

  // Callout
  | 'callout-l'
  | 'callout-m'
  | 'callout-s'

  // Body
  | 'body-l'
  | 'body-m'
  | 'body-s'

  // Subheadline
  | 'subheadline-l'
  | 'subheadline-m'
  | 'subheadline-s'

  // Footnote
  | 'footnote-l'
  | 'footnote-m'
  | 'footnote-s'

  // Caption 1
  | 'caption-l-1'
  | 'caption-m-1'
  | 'caption-s-1'

  // Caption 2
  | 'caption-l-2'
  | 'caption-m-2'
  | 'caption-s-2';

export type Props = {
  as?: AsElement;
  children: React.ReactNode;
  variant?: Variant;
  color?: Color;
} & BaseStylesProps;

export const Typography = (props: Props) => {
  const { as, variant = 'body-s', color = 'default', ...rest } = props;

  const Component = as || 'p';

  const variantStyles = {
    'body-l': 'text-body-l',
    'body-m': 'text-body-m',
    'body-s': 'text-body-s',
    'subheadline-l': 'text-subheadline-l',
    'subheadline-m': 'text-subheadline-m',
    'subheadline-s': 'text-subheadline-s',
    'footnote-l': 'text-footnote-l',
    'footnote-m': 'text-footnote-m',
    'footnote-s': 'text-footnote-s',
    'caption-l-1': 'text-caption-l-1',
    'caption-m-1': 'text-caption-m-1',
    'caption-s-1': 'text-caption-s-1',
    'caption-l-2': 'text-caption-l-2',
    'caption-m-2': 'text-caption-m-2',
    'caption-s-2': 'text-caption-s-2',
    'large-title-l': 'text-large-title-l',
    'large-title-m': 'text-large-title-m',
    'large-title-s': 'text-large-title-s',
    'title-l-1': 'text-title-l-1',
    'title-m-1': 'text-title-m-1',
    'title-s-1': 'text-title-s-1',
    'title-l-2': 'text-title-l-2',
    'title-m-2': 'text-title-m-2',
    'title-s-2': 'text-title-s-2',
    'title-l-3': 'text-title-l-3',
    'title-m-3': 'text-title-m-3',
    'title-s-3': 'text-title-s-3',
    'callout-l': 'text-callout-l',
    'callout-m': 'text-callout-m',
    'callout-s': 'text-callout-s',
    'headline-l': 'text-headline-l',
    'headline-m': 'text-headline-m',
    'headline-s': 'text-headline-s',
  }[variant];

  const colorStyles = {
    default: '',
    muted: 'text-base-400',
  }[color];

  const baseStyles = convertBaseProps(rest);

  return <Component {...rest} className={cn(variantStyles, colorStyles, baseStyles)} />;
};
