import { BaseStylesProps } from '../../lib/types';
import { default as React } from '../../../node_modules/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export declare const Popup: React.FC<DialogPrimitive.DialogProps>;
export declare const PopupTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const PopupPortal: React.FC<DialogPrimitive.DialogPortalProps>;
export declare const PopupOverlay: React.ForwardRefExoticComponent<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
type TitleProps = DialogPrimitive.DialogTitleProps & BaseStylesProps;
export declare const PopupTitle: (props: TitleProps) => import("react/jsx-runtime").JSX.Element;
type DescriptionProps = DialogPrimitive.DialogDescriptionProps & BaseStylesProps;
export declare const PopupDescription: (props: DescriptionProps) => import("react/jsx-runtime").JSX.Element;
type PopupCloseProps = DialogPrimitive.DialogCloseProps & BaseStylesProps;
export declare const PopupClose: (props: PopupCloseProps) => import("react/jsx-runtime").JSX.Element;
export declare const PopupContent: React.ForwardRefExoticComponent<DialogPrimitive.DialogContentProps & BaseStylesProps & React.RefAttributes<HTMLDivElement>>;
export declare const PopupFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const PopupHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
