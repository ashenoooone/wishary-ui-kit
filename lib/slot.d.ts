import { default as React } from '../../node_modules/react';
type SlotProps = {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
export declare const Slot: (props: SlotProps) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
export {};
