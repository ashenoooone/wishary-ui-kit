import { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: {
        asChild?: boolean;
    } & import('../../lib/types').BaseStylesProps & import('../../../node_modules/react').ClassAttributes<HTMLButtonElement> & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
