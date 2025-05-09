import { cn } from '@/lib/cn';
import { convertBaseProps } from '@/lib/convert-base-props';
import { BaseStylesProps } from '@/lib/types';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

export const Popup = DialogPrimitive.Root;
export const PopupTrigger = DialogPrimitive.Trigger;
export const PopupPortal = DialogPrimitive.Portal;

export const PopupOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogPrimitive.DialogOverlayProps
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      {...props}
      className={cn(
        'fixed inset-0 z-40 bg-black/30 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
    />
  );
});
PopupOverlay.displayName = 'PopupOverlay';

type TitleProps = DialogPrimitive.DialogTitleProps & BaseStylesProps;
export const PopupTitle = (props: TitleProps) => {
  const baseStyles = convertBaseProps(props);
  return (
    <DialogPrimitive.Title {...props} className={cn(baseStyles, 'text-callout-m text-center')} />
  );
};

type DescriptionProps = DialogPrimitive.DialogDescriptionProps & BaseStylesProps;
export const PopupDescription = (props: DescriptionProps) => {
  const baseStyles = convertBaseProps(props);
  return (
    <DialogPrimitive.Description
      {...props}
      className={cn('text-caption-s-1 text-base-600 text-center', baseStyles)}
    />
  );
};

type PopupCloseProps = DialogPrimitive.DialogCloseProps & BaseStylesProps;
export const PopupClose = (props: PopupCloseProps) => {
  const baseStyles = convertBaseProps(props);
  return <DialogPrimitive.Close {...props} className={cn(baseStyles)} />;
};

type ContentProps = DialogPrimitive.DialogContentProps & BaseStylesProps;

export const PopupContent = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...props }, ref) => {
    const baseStyles = convertBaseProps(props);
    return (
      <PopupPortal>
        <PopupOverlay />

        <DialogPrimitive.Content
          ref={ref}
          {...props}
          className={cn(
            'fixed left-1/2 top-1/2 z-50 grid w-full max-w-md -translate-x-1/2 -translate-y-1/2 gap-4',
            'bg-base-100 p-6 rounded-size-l shadow-lg',
            'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            className,
            baseStyles,
          )}
        >
          {children}
        </DialogPrimitive.Content>
      </PopupPortal>
    );
  },
);
PopupContent.displayName = 'PopupContent';

export const PopupFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
PopupFooter.displayName = 'PopupFooter';

export const PopupHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
PopupHeader.displayName = 'PopupHeader';
