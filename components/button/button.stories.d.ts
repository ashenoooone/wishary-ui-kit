import { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: {
        asChild?: boolean;
        size?: "small" | "medium" | "large";
        variant?: "primary" | "secondary" | "ghost";
    } & import('../../../node_modules/react').ClassAttributes<HTMLButtonElement> & import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & import('../../lib/types').BaseStylesProps) => import("react/jsx-runtime").JSX.Element;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultDisabled: Story;
export declare const Secondary: Story;
export declare const SecondaryDisabled: Story;
export declare const Ghost: Story;
