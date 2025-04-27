import { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: import('./index').FlexProps) => import("react/jsx-runtime").JSX.Element;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultWithGap: Story;
