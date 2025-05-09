export type Spacing =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type Rounded = 'l' | 'm' | 's';

export type BaseStylesProps = {
  p?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  px?: Spacing;
  py?: Spacing;
  m?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  textAlign?: TextAlign;
  className?: string;
  rounded?: Rounded;
};
