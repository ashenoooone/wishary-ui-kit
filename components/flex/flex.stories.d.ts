import { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: {
        children?: React.ReactNode;
        direction?: "row" | "column";
        align?: "end" | "start" | "center";
        justify?: "end" | "start" | "center" | "between" | "around";
        gap?: "0" | import('../../lib/types').Spacing;
    } & import('../../lib/types').BaseStylesProps) => import("react/jsx-runtime").JSX.Element;
    title: string;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultWithGap: Story;
