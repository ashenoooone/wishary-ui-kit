import { StoryObj } from '@storybook/react';
declare const meta: {
    component: import('../../../node_modules/react').FC<{
        files?: File[];
        maxFiles?: number;
        maxSizeMb?: number;
        onChange?: (payload: import('./index').UploadFileOnChangePayload) => void;
        subtitle?: string;
        error?: string;
    }>;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: Story;
