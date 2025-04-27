import React, { ChangeEvent } from 'react';
import { Flex } from '../flex';
import { Typography } from '../typography';
import { cn } from '@/lib/cn';

type ErrorType = 'size' | 'maxFiles';

export type UploadFileOnChangePayload =
  | {
      type: 'success';
      files: File[];
    }
  | {
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

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  files = [],
  error,
  maxFiles = 8,
  maxSizeMb = 5,
  onChange,
  subtitle = 'не более 8 шт',
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    const oversizedFile = selectedFiles.find(file => file.size > maxSizeMb * 1024 * 1024);
    if (oversizedFile) {
      onChange?.({ type: 'error', errorType: 'size' });
      return;
    }

    if (files.length + selectedFiles.length > maxFiles) {
      onChange?.({ type: 'error', errorType: 'maxFiles' });
      return;
    }

    const newFiles = [...files, ...selectedFiles];
    onChange?.({ type: 'success', files: newFiles });
  };

  // TODO: display loaded files
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap="2"
      textAlign="center"
      className={cn(
        'w-[144px] h-[144px] rounded-size-l',
        'cursor-pointer',
        'bg-base-200',
        'border-2 border-dashed border-base-300',
        'transition-all relative',
        'active:border-transparent',
        {
          'border-brand-secondary-1-500 hover:border-brand-secondary-1-700': error,
          'hover:border-base-400': !error,
        },
      )}
    >
      <input
        type="file"
        className="opacity-0 cursor-pointer absolute inset-0"
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />
      <Typography variant="caption-l-1">Добавить фото</Typography>
      <Typography variant="caption-m-2" color={error ? 'error' : 'muted'}>
        {error || subtitle}
      </Typography>
    </Flex>
  );
};
