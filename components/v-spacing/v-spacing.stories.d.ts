import { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: {
        size?: import('../../lib/types').Spacing;
    } & import('../../lib/types').BaseStylesProps) => import("react/jsx-runtime").JSX.Element;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
