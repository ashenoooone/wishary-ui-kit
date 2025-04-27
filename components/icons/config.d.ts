import { BaseStylesProps } from '../../lib/types';
import { ComponentProps } from '../../../node_modules/react';
export type IconProps = BaseStylesProps & ComponentProps<'svg'> & {
    size?: number;
};
export declare const DEFAULT_SIZE = 24;
