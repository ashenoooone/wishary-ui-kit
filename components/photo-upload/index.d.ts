import { default as React } from '../../../node_modules/react';
type ErrorType = 'size' | 'maxFiles';
export type UploadFileOnChangePayload = {
    type: 'success';
    files: File[];
} | {
    type: 'error';
    errorType: ErrorType;
};
type PhotoUploaderProps = {
    files?: File[];
    maxFiles?: number;
    maxSizeMb?: number;
    onChange?: (payload: UploadFileOnChangePayload) => void;
    subtitle?: string;
    error?: string;
};
export declare const PhotoUploader: React.FC<PhotoUploaderProps>;
export {};
